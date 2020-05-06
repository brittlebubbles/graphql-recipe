const { ApolloServer, gql } = require("apollo-server");

const recipies = [
  {
    id: 1,
    name: "Jollof Rice",
    description: "It just be rice then stew mixed together ..e really dey bee",
    timeDuration: 2000,
  },
  {
    id: 2,
    name: "Fried Rice",
    description:
      "Oh those America America food some.. slow but we come like am pass",
    timeDuration: 12,
  },
  {
    id: 3,
    name: "Waakye",
    description: "In the morning dieerr if you miss am dierr You're Fucked",
    timeDuration: 12,
  },
  {
    id: 4,
    name: "Oat Meal",
    description: "Mommy dey like Oat pass anything",
    timeDuration: 12,
  },
];

const typeDefs = gql`
  type Recipe {
    id: ID!
    name: String!
    description: String
    timeDuration: Int
  }

  type Query {
    recipies: [Recipe!]
    recipe(id: ID!): Recipe
  }

  input RecipeInput {
    id: ID
    name: String
    description: String
    timeDuration: Int
  }

  type Mutation {
    createRecipe(recipe: RecipeInput): Recipe
    editRecipe(
      id: ID!
      name: String!
      description: String!
      timeDuration: Int!
    ): Recipe
  }
`;

const resolvers = {
  Query: {
    recipies: () => {},
    recipe: (_, { id }) => {
      return recipies.find((p) => p.id == id);
    },
  },

  Mutation: {
    createRecipe: (_, recipe) => {
      const newRecipe = {
        id: "121",
        name: "dsfsf",
        description: "dsdwfwfwf",
        timeDuration: 12,
      };
      recipies.push(newRecipe);
      return newRecipe;
    },
    editRecipe: (_, { id, recipe }) => {
      const updateRecipe = { id: "2", name: "ncndjcjcje" };
      let findId = recipies.findIndex((c) => c.id == id);
      let update = recipies.splice(findId, 1, updateRecipe);
      return updateRecipe;
    },
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
