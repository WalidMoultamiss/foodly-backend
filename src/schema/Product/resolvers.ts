import { pubsub } from "@config/pubsub";
import type { Resolvers } from "@generated/types";
import { Product, IProduct, Store, Category } from "@models/index";
import {io} from '../../config/apollo'

export const resolvers: Resolvers = {
  Query: {
    getAllProducts: (): any => {
      let products =  Product.find();
      // filter by viewed number

      products = products.sort({ viewed: -1 });
      return products;
    },
    //@ts-ignore
    getAllProductsWithPagination: (_: any, { inputs }: { inputs: any }): any => {
      return Product.find().limit(inputs.limit).skip(inputs.cursor);
    },
    //@ts-ignore
    getProductById: (_: any, { id }: { id: string }): any =>
      Product.findById(id),
      // @ts-ignore

  },
  Mutation: {
    //@ts-ignore
    createProduct: async (_: any, { input }: { input: IProduct } ) => {

      const product = new Product(input);

      let chiData = await product.save();
      return chiData;
    },
    // @ts-ignore
    addProductToStore: async (_: any, { input }: { input: any }) => {
      const { storeId, productIds } = input;
      const store = await Store.findById(storeId);
      if (!store) {
        throw new Error("Store not found");
      }
      store.productIds.push(...productIds);
      let chiData = await store.save();
      return chiData;
    },
  },
};
