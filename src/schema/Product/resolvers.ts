import type { Resolvers } from "@generated/types";
import { Product, IProduct, Category } from "@models/index";

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
  },
};
