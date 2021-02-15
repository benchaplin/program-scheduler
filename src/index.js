import { ApolloServer } from "apollo-server-express";
import express from "express";
import mongoose from "mongoose";
import { resolvers } from "./resolvers";
import { typeDefs } from "./typeDefs";

async function startServer() {
    const app = express();

    const server = new ApolloServer({
        typeDefs,
        resolvers
    });

    server.applyMiddleware({ app });

    mongoose.set('useFindAndModify', false);
    await mongoose.connect("mongodb://localhost:27017/test", {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });

    app.listen({ port: 3000 }, () =>
        console.log(`Server ready at localhost:3000${server.graphqlPath}`)
    );
}

startServer();
