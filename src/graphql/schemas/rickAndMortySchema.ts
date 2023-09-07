import { buildSchema } from 'graphql';

export const rickAndMortySchema = buildSchema(`
  type Character {
    id: ID
    name: String
    species: String
    type: String
    gender: String
    image: String
    created: String
  }

  type Query {
    characters(page: Int, pageSize: Int): [Character]
  }
`);
