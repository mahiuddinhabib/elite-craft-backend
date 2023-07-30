import { Model } from 'mongoose';

export type IProductStatus = 'in stock' | 'stock out';

export type IProductCategory =
  | 'Processor'
  | 'Motherboard'
  | 'RAM'
  | 'Power Supply Unit'
  | 'Storage Device'
  | 'Monitor'
  | 'Others';

export type IProduct = {
  //   _id?: string;
  image: string;
  productName: string;
  category: IProductCategory;
  status: IProductStatus;
  price: number;
  description: string;
  keyFeatures?: { key: string; value: unknown }[];
  individualRating: number;
  averageRating: number;
  reviews?: string[];
};

export type ProductModel = Model<IProduct, Record<string, unknown>>;

export type IProductFilters = {
  searchTerm?: string;
  category?: string;
};
