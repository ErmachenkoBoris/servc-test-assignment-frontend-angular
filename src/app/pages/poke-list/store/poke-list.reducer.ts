import { createReducer, on } from '@ngrx/store';
import { pokeListActions } from './poke-list.actions';
import { PokeListStore } from '../../../inrefaces/store';

export const initialState: PokeListStore = {
  pokeList: [],
  totalCount: 0,
  offset: 0,
  limit: 0,
  error: ''
};

export const pokeListReducer = createReducer(
  initialState,
  on(
    pokeListActions.loadPokesSuccess,
    (state, { pokes, limit, offset, totalCount }) => {
      return { pokeList: pokes, totalCount, offset, limit, error: '' };
    }
  ),
  on(pokeListActions.loadPokesError, (state, { error }) => {
    return { ...state, error };
  })
);
