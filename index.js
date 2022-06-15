const express = require('express');
const fs = require("fs");
const { ApolloServer } = require('apollo-server-express');

// Construct a schema, using GraphQL schema language
const typeDefs = require('./src/schema/schema');
// Provide resolver functions for your schema fields
const resolvers = require('./src/schema/resolvers');

let world = require("./src/world");

function readUserWorld(user) {
    try {
        const data = fs.readFileSync("./src/userworlds/" + user + "-world.json");
        return JSON.parse(data);
    } catch (error) {
        console.log(error)
        return world
    }
}

const server = new ApolloServer({
    typeDefs, resolvers,
    context: ({ req }) => {
        return ({
            world: readUserWorld(req.headers["x-user"]),
            user: req.headers["x-user"]
        })
    }
});

const app = express();
app.use(express.static('public'));
server.start().then(res => {
    server.applyMiddleware({ app });
    app.listen({ port: 4000 }, () =>
        console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
    );
})