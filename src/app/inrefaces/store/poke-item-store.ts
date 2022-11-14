import { PokeFullInfo } from '../poke-full-info';

export interface PokeItemStore {
  poke: PokeFullInfo;
  error: string;
}
