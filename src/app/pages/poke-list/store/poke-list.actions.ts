import {createAction, props} from '@ngrx/store';
import {Poke} from "../../../inrefaces/poke";

export const LOAD_POKES_TYPE = '[Pokes List Component] Load Pokes';

export const LOAD_POKES_SUCCESS_TYPE = '[Pokes List Component] Load Pokes Success';

export const LOAD_POKES_ERROR_TYPE = '[Pokes List Component] Load Pokes Error';



const loadPokes = createAction(LOAD_POKES_TYPE);

const loadPokesSuccess = createAction(LOAD_POKES_SUCCESS_TYPE, props<{pokes: Poke[]}>());

const loadPokesError = createAction(LOAD_POKES_ERROR_TYPE, props<{error: string}>());

export const pokeListActions = {loadPokes, loadPokesError, loadPokesSuccess};

