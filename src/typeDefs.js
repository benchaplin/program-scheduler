import { gql } from "apollo-server-express";

export const typeDefs = gql`
    type Query {
        students: [User]!
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
    }
`;
