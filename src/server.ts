// use dotenv to load environment variables
import dotenv from "dotenv";
dotenv.config();
// import necessary modules
import express, { Application } from "express";
import { ApolloServer } from "apollo-server-express";
import { schema } from "./graphql/schema";

const startServer = async () => {

    const app: Application = express();
    const server = new ApolloServer({ schema });

    await server.start();
    server.applyMiddleware({ app });

    const PORT = process.env.PORT || 4000;
    app.listen(PORT, () => {
        console.log(`Server is running on http://localhost:${PORT}${server.graphqlPath}`);
    });
};

startServer();
