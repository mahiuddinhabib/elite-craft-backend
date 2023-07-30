import { Request, Response } from 'express';
import httpStatus from 'http-status';
import { paginationFields } from '../../../constants/pagination';
import catchAsync from '../../../shared/catchAsync';
import pick from '../../../shared/pick';
import sendResponse from '../../../shared/sendResponse';
import { productFilterableFields } from './product.constant';
import { IProduct } from './product.interface';
import { ProductService } from './product.service';

const getAllProducts = catchAsync(async (req: Request, res: Response) => {
  const filters = pick(req.query, productFilterableFields);
  const paginationOptions = pick(req.query, paginationFields);

  const result = await ProductService.getAllProducts(filters, paginationOptions);

  sendResponse<IProduct[]>(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Products retrieved successfully',
    meta: result.meta,
    data: result.data,
  });
});

const getSingleProduct = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await ProductService.getSingleProduct(id);

  sendResponse<IProduct>(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Product retrieved successfully',
    data: result,
  });
});

export const ProductController = {
  getAllProducts,
  getSingleProduct,
};
