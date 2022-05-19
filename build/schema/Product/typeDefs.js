"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.typeDefs = void 0;
const apollo_server_express_1 = require("apollo-server-express");
exports.typeDefs = (0, apollo_server_express_1.gql) `
    input ProductInput {
        name: String!
        description: String!
        image: [String]!
        price: String!
    }

    input pagination {
        cursor: Int
        limit: Int
    }

    input ProductStoreInput {
        productIds: [ID]
    }

    type Product {
        id: ID!
        name: String!
        description: String!
        image: [String]!
        price: String!
        status: String!
        createdAt: String!
    }

    type Query {
        getAllProducts: [Product]
        getProductById(id: ID!): Product
        getProductByUuid(uuid: String!): Product
        getAllProductsWithPagination(inputs: pagination): [Product]
    }

    type Mutation {
        createProduct(input: ProductInput): Product
        updateProduct(id: ID!, input: ProductInput): Product
        deleteProduct(id: ID!): Product
        addViewed(id: ID!): Product
    }

    type Subscription {
        productAdded: Product
        productUpdated: Product
        productDeleted: Product
        productViewed: Product
    }
`;
//# sourceMappingURL=typeDefs.js.map