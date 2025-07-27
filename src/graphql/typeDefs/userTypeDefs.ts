import { gql } from "apollo-server-express";

const userTypeDefs = gql`
    
    type User {
        id: ID!
        name: String!
        email: String!
        password: String!
        avatar: String
        createdAt: String!
    }


    type Query {
        getUser(id: ID!): User
    }

    input CreateUserInput {
        name: String!
        email: String!
        password: String!
        avatar: String
    }

    type tokenResponse {
        token: String!
    }

    type Mutation {
        createUser(input: CreateUserInput!): tokenResponse!
    }

`;

export default userTypeDefs;
