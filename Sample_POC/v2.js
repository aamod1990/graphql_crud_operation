const express = require('express');
const { ApolloServer, gql } = require('apollo-server-express');
 
// Construct a schema, using GraphQL schema language
const typeDefs = gql`
  type Query {
    hello: String
  }
`;
 
// Provide resolver functions for your schema fields
const resolvers = {
  Query: {
    hello: () => 'Hello world!',
  },
};
function getUser(token){
    console.log("servereeeeeeeeeeeeeeeeeeeeeeeeeeee",token);
    return true;
}
const server = new ApolloServer({ typeDefs, resolvers,context: ({ req }) => {
    const token = req.headers.authorization;
    console.log("token11111111111",token);
    const user = getUser(token);
    if (!user) throw new AuthenticationError('you must be logged in'); 
    return { user };

  }});
 
const app = express();
server.applyMiddleware({ app });
 
app.listen({ port: 3000 }, () =>
  console.log(`🚀 Server ready at http://localhost:3000${server.graphqlPath}`)
);
module.exports = server;
module.exports = app;