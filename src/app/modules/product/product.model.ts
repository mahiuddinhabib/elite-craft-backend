import { Schema, model } from 'mongoose';
import { productCategory, productStatus } from './product.constant';
import { IProduct, ProductModel } from './product.interface';

export const ProductSchema = new Schema<IProduct, ProductModel>(
  {
    // _id: { type: String },
    image: { type: String, required: true },
    productName: { type: String, required: true },
    category: { type: String, enum: productCategory, required: true },
    status: { type: String, enum: productStatus, required: true },
    price: { type: Number, required: true },
    description: { type: String, required: true },
    keyFeatures: { type: [{ key: String, value: Schema.Types.Mixed }] },
    individualRating: { type: Number, required: true },
    averageRating: { type: Number, required: true },
    reviews: { type: [String] },
  },
  {
    timestamps: true,
  }
);

export const Product = model<IProduct, ProductModel>('Product', ProductSchema);
