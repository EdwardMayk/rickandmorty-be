import axios, { AxiosResponse } from 'axios';
import { Character } from './character'; 

const API_BASE_URL = process.env.RICK_AND_MORTY_API_BASE_URL || 'https://rickandmortyapi.com/graphql';

export const rickAndMortyAPI = {
  getCharacters: async (): Promise<Character[]> => {
    try {
      const query = `
        query {
          characters {
            results {
              id
              name
              species
              type
              gender
              image
              created
            }
          }
        }
      `;

      const response: AxiosResponse<any> = await axios.post(API_BASE_URL, { query });

      if (response.status !== 200) {
        throw new Error('Unable to retrieve characters from Rick and Morty');
      }

      const charactersData: Character[] = response.data.data.characters.results;

      return charactersData;
    } catch (error) {
      console.error('Unable to retrieve characters from Rick and Morty', error);
      throw new Error('Characters cannot be obtained at this time.');
    }
  },
};
