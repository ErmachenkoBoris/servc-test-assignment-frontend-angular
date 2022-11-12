import { createReducer, on } from '@ngrx/store';
import { pokeListActions } from './poke-list.actions';
import {PokeListStore} from "../../../inrefaces/store";

export const initialState: PokeListStore = {
  pokeList: []
};

export const pokeListReducer = createReducer(
  initialState,
  on(pokeListActions.loadPokesSuccess, (state, {pokes}) => {
    console.log('pokes ', pokes);
    return {pokeList: pokes} }),
);

