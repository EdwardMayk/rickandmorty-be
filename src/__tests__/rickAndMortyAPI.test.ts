import { Character } from '../data/character';
import { rickAndMortyAPI } from '../data/rickAndMortyData';


describe('rickAndMortyAPI.getCharacters', () => {
  it('should return a list of characters', async () => {
    const characters: Character[] = await rickAndMortyAPI.getCharacters();

    expect(Array.isArray(characters)).toBe(true);

    expect(characters.length).toBeGreaterThan(0);

    characters.forEach((character) => {
      expect(character.id).toBeDefined();
      expect(character.name).toBeDefined();
      expect(character.species).toBeDefined();
      expect(character.type).toBeDefined();
      expect(character.gender).toBeDefined();
      expect(character.image).toBeDefined();
      expect(character.created).toBeDefined();
    });
  });
  
});
