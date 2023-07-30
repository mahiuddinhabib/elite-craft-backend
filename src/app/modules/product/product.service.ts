import httpStatus from 'http-status';
import { SortOrder } from 'mongoose';
import ApiError from '../../../errors/ApiError';
import { paginationHelpers } from '../../../helpers/paginationHelper';
import { IGenericResponse } from '../../../interfaces/common';
import { IPaginationOptions } from '../../../interfaces/pagination';
import { productSearchableFields } from './product.constant';
import { IProduct, IProductFilters } from './product.interface';
import { Product } from './product.model';

const getAllProducts = async (
  filters: IProductFilters,
  paginationOptions: IPaginationOptions
): Promise<IGenericResponse<IProduct[]>> => {
  const { searchTerm, ...filtersData } = filters;

  const count = await Product.countDocuments();
  if (!paginationOptions.limit) paginationOptions.limit = count;
  const { page, limit, skip, sortBy, sortOrder } =
    paginationHelpers.calculatePagination(paginationOptions);

  const andConditions = [];

  if (searchTerm) {
    andConditions.push({
      $or: productSearchableFields.map(field => ({
        [field]: {
          $regex: searchTerm,
          $options: 'i',
        },
      })),
    });
  }

  if (Object.keys(filtersData).length) {
    andConditions.push({
      $and: Object.entries(filtersData).map(([field, value]) => ({
        [field]: value,
      })),
    });
  }

  const sortConditions: { [key: string]: SortOrder } = {};

  if (sortBy && sortOrder) {
    sortConditions[sortBy] = sortOrder;
  }
  const whereConditions =
    andConditions.length > 0 ? { $and: andConditions } : {};

  const result = await Product.find(whereConditions)
    .sort(sortConditions)
    .skip(skip)
    .limit(limit);

  return {
    meta: {
      page,
      limit,
      count,
    },
    data: result,
  };
};

const getSingleProduct = async (id: string): Promise<IProduct | null> => {
  const result = await Product.findById(id);
  if (!result) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Product not found');
  }
  return result;
};

export const ProductService = {
  getAllProducts,
  getSingleProduct,
};
