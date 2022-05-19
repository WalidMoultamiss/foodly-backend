import { Schema, model } from "mongoose";


export interface IMenu {
  product: string[];
}



const MenuSchema = new Schema<IMenu>({
  product: { type: [String]  },
});

export const Menu = model<IMenu>("Menu", MenuSchema);
