import { Poke } from '../poke';

export interface PokeListStore {
  pokeList: Poke[];
  totalCount: number;
  limit: number;
  offset: number;
  error: string;
}
