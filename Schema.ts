import { GraphQLObjectType, GraphQLString, GraphQLList } from 'graphql';
import mongoose from 'mongoose';

// Define the AtlassianSupport type with fields for the URL and authentication token
const AtlassianSupportType = new GraphQLObjectType({
  name: 'AtlassianSupport',
  fields: {
    url: { type: GraphQLString },
    token: { type: GraphQLString },
  },
});

// Define the Ticket type with fields for the ticket ID, title, and description
const TicketType = new GraphQLObjectType({
  name: 'Ticket',
  fields: {
    id: { type: GraphQLString },
    title: { type: GraphQLString },
    description: { type: GraphQLString },
  },
});

// Define the Query type with a field for fetching a list of tickets
const QueryType = new GraphQLObjectType({
  name: 'Query',
  fields: {
    tickets: {
      type: new GraphQLList(TicketType),
      resolve(parent, args, context, info) {
        // Use the `context` object to access the Atlassian Support API and
        // fetch a list of open support tickets.
        // Then use the MongoDB driver to store the fetched data in the database.
      },
    },
  },
});

const schema = new GraphQLSchema({
  query: QueryType,
});

export default schema;
