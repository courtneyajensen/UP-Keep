const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Fall {
    name: String!
  }

  type Spring {
    name: String!
  }

  type Summer {
    name: String!
  }

  type Winter {
    name: String!
  }

  //type Query 

  //type Mutation 
`;

module.exports = typeDefs;