"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.resolvers = void 0;
const index_1 = require("../../models/index");
exports.resolvers = {
    Query: {
        getAllProducts: () => {
            let products = index_1.Product.find();
            // filter by viewed number
            products = products.sort({ viewed: -1 });
            return products;
        },
        //@ts-ignore
        getAllProductsWithPagination: (_, { inputs }) => {
            return index_1.Product.find().limit(inputs.limit).skip(inputs.cursor);
        },
        //@ts-ignore
        getProductById: (_, { id }) => index_1.Product.findById(id),
        // @ts-ignore
    },
    Mutation: {
        //@ts-ignore
        createProduct: async (_, { input }) => {
            const product = new index_1.Product(input);
            let chiData = await product.save();
            return chiData;
        },
    },
};
//# sourceMappingURL=resolvers.js.map