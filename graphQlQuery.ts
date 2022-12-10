import { GraphQLObjectType, GraphQLList } from 'graphql';
import AtlassianSupportType from './AtlassianSupportType';

const QueryType = new GraphQLObjectType({
  name: 'Query',
  fields: {
    support: {
      type: new GraphQLList(AtlassianSupportType),
      resolve(parent, args, context, info) {
        // Use the `context` object to access the Atlassian Support API and
        // fetch a list of open support tickets.
      },
    },
  },
});

export default QueryType;
