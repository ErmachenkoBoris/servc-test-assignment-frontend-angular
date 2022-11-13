import { createAction, props } from '@ngrx/store';
import { Poke } from '../../../inrefaces/poke';

export const LOAD_POKES_TYPE = '[Pokes List Component] Load Pokes';

export const LOAD_POKES_SUCCESS_TYPE =
  '[Pokes List Component] Load Pokes Success';

export const LOAD_POKES_ERROR_TYPE = '[Pokes List Component] Load Pokes Error';

const loadPokes = createAction(
  LOAD_POKES_TYPE,
  props<{ offset: number; limit: number }>()
);

const loadPokesSuccess = createAction(
  LOAD_POKES_SUCCESS_TYPE,
  props<{ pokes: Poke[]; totalCount: number; limit: number; offset: number }>()
);

const loadPokesError = createAction(
  LOAD_POKES_ERROR_TYPE,
  props<{ error: string }>()
);

export type LoadPokesAction = ReturnType<typeof loadPokes>;

export const pokeListActions = { loadPokes, loadPokesError, loadPokesSuccess };
