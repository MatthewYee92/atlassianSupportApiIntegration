import { GraphQLObjectType, GraphQLString } from 'graphql';

const AtlassianSupportType = new GraphQLObjectType({
  name: 'AtlassianSupport',
  fields: {
    url: { type: GraphQLString },
    token: { type: GraphQLString },
  },
});

export default AtlassianSupportType;
