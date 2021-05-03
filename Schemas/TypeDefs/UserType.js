const UserType = new GraphQLObjectType({
  name: 'User',
  fields: () => ({
    id: { type: GraphQLInt },
    firstName: { type: GraphQLString },
    lastname: { type: GraphQLString },
    email: { type: GraphQLString },
    password: { type: GraphQLString },
  }),
});

module.exports = UserType;
