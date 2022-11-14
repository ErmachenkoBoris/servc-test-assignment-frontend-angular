import { PokeListStore } from './poke-list-store';
import { PokeItemStore } from './poke-item-store';

export interface AppStore {
  pokeList: PokeListStore;
  pokeItem: PokeItemStore;
}
