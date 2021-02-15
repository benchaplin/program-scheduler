import { gql } from "apollo-server-express";

export const typeDefs = gql`
    type Query {
        users: [User]!
    }

    type User {
        id: ID!
        type: String!
        username: String!
        password: String!
        firstName: String!
        lastName: String!
        timezone: Int!
        courses: [ID]!
    }

    input UserInput {
        id: ID
        type: String
        username: String
        password: String
        firstName: String
        lastName: String
        timezone: Int
        courses: [ID]
    }

    type Mutation {
        createUser(
            type: String!
            username: String!
            password: String!
            firstName: String!
            lastName: String!
            timezone: Int!
            courses: [ID]!
        ): User!
        updateUser(
            filter: UserInput!,
            userArgsToUpdate: UserInput!
        ): User!
        deleteUser(filter: UserInput!): User!
    }
`;
