'use strict'

const express          = require('express');
const { graphqlHTTP }  = require('express-graphql');

const app              = express();
const { schema, root } = require('./models/course');

app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true
}));

app.listen(4000, () => {
  console.log('Express graphQL Server now running on localhost:4000/graphql');
})