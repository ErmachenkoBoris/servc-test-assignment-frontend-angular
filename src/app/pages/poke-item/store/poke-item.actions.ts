import { createAction, props } from '@ngrx/store';
import { PokeFullInfo } from '../../../inrefaces/poke-full-info';

export const LOAD_POKE_ITEM_TYPE = '[Poke Item Component] Load Poke';

export const LOAD_POKE_ITEM_SUCCESS_TYPE =
  '[Pokes Item Component] Load Poke Success';

export const LOAD_POKE_ITEM_ERROR_TYPE =
  '[Poke Item Component] Load Poke Error';

export const POKE_RESET_TYPE = '[Poke Item Component] Reset';

const loadPokeItem = createAction(
  LOAD_POKE_ITEM_TYPE,
  props<{ pokeId: string }>()
);

const loadPokeItemSuccess = createAction(
  LOAD_POKE_ITEM_SUCCESS_TYPE,
  props<{ poke: PokeFullInfo }>()
);

const pokeReset = createAction(POKE_RESET_TYPE);

const loadPokeItemError = createAction(
  LOAD_POKE_ITEM_ERROR_TYPE,
  props<{ error: string }>()
);

export type LoadPokeAction = ReturnType<typeof loadPokeItem>;

export const pokeItemActions = {
  pokeReset,
  loadPokeItem,
  loadPokeItemSuccess,
  loadPokeItemError
};
