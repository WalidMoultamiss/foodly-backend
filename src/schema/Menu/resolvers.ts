import type { Resolvers } from "@generated/types";
import { IMenu, Category, Product, Menu, User } from "@models/index";

export const resolvers: Resolvers = {
  Query: {
    //@ts-ignore
    getAllMenu: (): any => {
      return Menu.find();
    },
    getMenuById: (_: any, { id }: { id: string }): any => Menu.findById(id),
  },
  Mutation: {
    //@ts-ignore
    createMenu: async (_: any, { input }: { input: IMenu }) => {
      const menu = new Menu({
        name: input.name,
        //@ts-ignore
        productIds: input.productIds,
      });
      let chiData = await menu.save();
      return chiData;
    },
  },
  Menu: {
    //@ts-ignore
    productIds: async (menu: Menu) => {
      return Product.find({ _id: { $in: menu.productIds } });
    },
  },
};
