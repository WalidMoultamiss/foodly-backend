import { Schema, model } from "mongoose";

export interface IProduct {
  name: string;
  description: string;
  image: string[];
  price: string;
  createdAt: string;
  status: string;
}

const ProductSchema = new Schema<IProduct>({
  name: { type: String, required: true },
  description: { type: String, required: true },
  image: { type: [String], required: false, default: [] },
  price: { type: String, required: true },
  status: { type: String, default: "ACTIVE" },
  createdAt: { type: String, default: "" + Date.now() },
});

export const Product = model<IProduct>("Product", ProductSchema);
