import { Schema, model } from "mongoose";


export interface IMenu {
  userId: string;
  product: string[];
  quantity: string;
}



const MenuSchema = new Schema<IMenu>({
  userId: { type: String, required: true },
  product: { type: [String]  },
  quantity:{type: String, required: true}
});

export const Menu = model<IMenu>("Menu", MenuSchema);
