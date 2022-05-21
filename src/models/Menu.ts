import { Schema, model } from "mongoose";


export interface IMenu {
  name: string;
  productIds: string[];
}



const MenuSchema = new Schema<IMenu>({
  name: {type: String, required: true},
  productIds: { type: [String]},
});

export const Menu = model<IMenu>("Menu", MenuSchema);
