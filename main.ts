import { character } from "./resolvers/character.ts";
import { Query } from "./resolvers/query.ts";
import { ApolloServer } from "npm:@apollo/server@^4.1";
import { startStandaloneServer } from "npm:@apollo/server@4.1/standalone";
import { graphql } from "npm:graphql@16.6";
import { typeDefs } from "./gql/schema.ts";


const seerver = new ApolloServer({
  typeDefs,
  resolvers :{
    character,
    episode,
    Location,
    Query
  },
});

const { url } = await startStandaloneServer(seerver, {
  listen: { port: 8003},
});

console.log(`Server running on: ${url}`)