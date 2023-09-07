import { rickAndMortyAPI } from '../../data/rickAndMortyData';

const resolvers = {
  Query: {
    characters: async (_parent: any, args: { page: number, pageSize: number }) => {
      try {
        const { page = 1, pageSize = 10 } = args;

        const startIndex = (page - 1) * pageSize;

        const characters = await rickAndMortyAPI.getCharacters();

        const paginatedCharacters = characters.slice(
          startIndex,
          startIndex + pageSize
        );

        return paginatedCharacters;
      } catch (error) {
        throw new Error('Unable to retrieve characters');
      }
    },
  },
};

export default resolvers;
