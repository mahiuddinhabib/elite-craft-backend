import { IProductCategory, IProductStatus } from './product.interface';

export const productStatus: IProductStatus[] = ['in stock', 'stock out'];

export const productCategory: IProductCategory[] = [
  'Processor',
  'Motherboard',
  'RAM',
  'Power Supply Unit',
  'Storage Device',
  'Monitor',
  'Others',
];

export const productSearchableFields = ['productName', 'status', 'category'];

export const productFilterableFields = ['searchTerm', 'category'];
