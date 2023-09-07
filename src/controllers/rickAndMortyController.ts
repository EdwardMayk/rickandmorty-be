import { Request, Response } from 'express';
import { rickAndMortyAPI } from '../data/rickAndMortyData';

export const rickAndMortyController = {
  getCharacters: async (req: Request, res: Response) => {
    try {
      const characters = await rickAndMortyAPI.getCharacters();
      res.json(characters);
    } catch (error) {
      console.error('Error getting characters:', error);
      res.status(500).json({ error: 'error getting characters' });
    }
  },
};
