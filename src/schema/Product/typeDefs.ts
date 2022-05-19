import {gql} from 'apollo-server-express';
import {IStatus} from '@ts/enums';

export const typeDefs = gql`
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