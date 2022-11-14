import { createSelector } from '@ngrx/store';
import { AppStore } from '../../../inrefaces/store';
import { PokeListStore } from '../../../inrefaces/store';

export const selectPokeList = (state: AppStore) => state.pokeList;

export const selectPokeListValue = createSelector(
  selectPokeList,
  (state: PokeListStore) => state.pokeList
);

export const selectPokeTotalCountValue = createSelector(
  selectPokeList,
  (state: PokeListStore) => state.totalCount
);

export const selectPokeListError = createSelector(
  selectPokeList,
  (state: PokeListStore) => state.error
);
