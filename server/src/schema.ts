const gql = require('graphql-tag');

export const typeDefs = gql`
    "Query to get all tracks for home page"
    type Query {
        tracksForHome: [Track!]!
    }

  "Group of modules that teaches about a spcefici topic"
  type Track {
    id: ID!
    "Track's main title"
    title: String!
    "Track's main author"
    author: Author!
    "Track's main thumbnail"
    thumbnail: String
    "Track's approximate length to complete, in minutes"
    length: Int
    "Number of modules this track contains"
    modulesCount: Int
  }

  "Author of a complete track"
  type Author {
    id: ID!
    "Author's name"
    name: String!
    "Author's photo"
    photo: String
  }
`;

// module.exports = typeDefs;
