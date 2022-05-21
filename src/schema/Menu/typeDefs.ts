import {gql} from 'apollo-server-express';

export const typeDefs = gql`
    input MenuInput {
        name: String!
        productIds: [ID]!
    }

    type Menu {
        id: ID!
        name: String!
        productIds: [Product]
    }

    type Query {
        getAllMenu: [Menu]
        getMenuById(id: ID!): Menu
    }

    type Mutation {
        createMenu(input: MenuInput): Menu
        updateMenu(input: MenuInput): Menu
        deleteMenu(id: ID!): Menu
    }
`;