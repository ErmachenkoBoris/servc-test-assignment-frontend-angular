import { createSelector } from '@ngrx/store';
import { AppStore } from '../../../inrefaces/store';
import { PokeItemStore } from '../../../inrefaces/store/poke-item-store';

export const selectPokeItem = (state: AppStore) => state.pokeItem;

export const selectPokeItemValue = createSelector(
  selectPokeItem,
  (state: PokeItemStore) => state?.poke
);

export const selectPokeItemError = createSelector(
  selectPokeItem,
  (state: PokeItemStore) => state?.error
);
