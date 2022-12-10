import { GraphQLObjectType, GraphQLString } from 'graphql';

// This schema defines a AtlassianSupport type with two fields: url and token. The url field represents the base URL of the Atlassian Support API, and the token field represents the authentication token that is used to access the API.


const AtlassianSupportType = new GraphQLObjectType({
  name: 'AtlassianSupport',
  fields: {
    url: { type: GraphQLString },
    token: { type: GraphQLString },
  },
});

export default AtlassianSupportType;

