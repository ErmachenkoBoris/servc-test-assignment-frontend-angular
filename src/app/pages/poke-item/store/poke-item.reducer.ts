import { createReducer, on } from '@ngrx/store';
import { pokeItemActions } from './poke-item.actions';
import { PokeItemStore } from '../../../inrefaces/store/poke-item-store';
import { PokeFullInfo } from '../../../inrefaces/poke-full-info';

export const POKE_ITEM_REDUCER_NAME = 'pokeItem';

export const initialState: PokeItemStore = {
  poke: <PokeFullInfo>{},
  error: ''
};

export const pokeItemReducer = createReducer(
  initialState,
  on(pokeItemActions.loadPokeItemSuccess, (state, { poke }) => {
    return { poke, error: '' };
  }),
  on(pokeItemActions.loadPokeItemError, (state, { error }) => {
    return { ...state, error };
  }),
  on(pokeItemActions.pokeReset, (state) => {
    return Object.assign({}, initialState);
  })
);
