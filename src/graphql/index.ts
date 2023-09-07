import { GraphQLSchema } from 'graphql';
import { rickAndMortySchema } from './schemas/rickAndMortySchema';
import rickAndMortyResolvers from './resolvers/rickAndMortyResolvers';
import { makeExecutableSchema } from '@graphql-tools/schema';

const executableSchema: GraphQLSchema = makeExecutableSchema({
  typeDefs: [rickAndMortySchema],
  resolvers: rickAndMortyResolvers as any,
});

export const mySchema = executableSchema; 
export const myResolvers = rickAndMortyResolvers; 