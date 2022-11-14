import "reflect-metadata";
import express from "express";
import bodyParser from "body-parser";
import { buildSchema } from "type-graphql";
import { GreetResolver, UserResolver } from "./resolvers/index";
import { ApolloServer } from "apollo-server-express";
import { ApolloServerPluginLandingPageGraphQLPlayground } from "apollo-server-core";
import { connectToMongo } from "./config";
import { PostResolver } from "./resolvers/post.resolver";
import { AppContext } from "./types/AppContext";
import { authChecker } from "./utils/authChecker";

export const startApp = async () => {
  //build the schema
  const schema = await buildSchema({
    resolvers: [GreetResolver, UserResolver, PostResolver],
    authChecker,
  });

  //Init express
  const app = express();
  app.use(bodyParser.json({ limit: "30mb" }));
  app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));

  //create the apollo server
  const server = new ApolloServer({
    schema,
    context: ({ req }): AppContext => ({ req }),
    plugins: [ApolloServerPluginLandingPageGraphQLPlayground()],
  });

  //server start
  await server.start();

  //apply middleware to server
  server.applyMiddleware({ app });
  //app.listen on express server
  app.listen({ port: 5000 }, () => {
    console.log("App is listening on http://localhost:5000/graphql");
  });
  // //connect to mongodb
  connectToMongo();
};
