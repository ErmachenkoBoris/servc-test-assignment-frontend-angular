import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { catchError, map, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { ApiService } from '../../../api.service';
import {
  LOAD_POKES_TYPE,
  LoadPokesAction,
  pokeListActions
} from './poke-list.actions';
import { Poke } from '../../../inrefaces/poke';
import { addImageSrc } from '../../../utils/addImageSrc';

@Injectable()
export class PokeListEffects {
  loadPokesEffect$ = createEffect(() =>
    this.actions$.pipe(
      ofType(LOAD_POKES_TYPE),
      switchMap((action: LoadPokesAction) => {
        return this.apiService.get(action?.offset, action?.limit).pipe(
          map((res) => {
            return {
              ...res,
              results: res.results.map(addImageSrc)
            };
          }),
          map((res) =>
            pokeListActions.loadPokesSuccess({
              pokes: <Poke[]>res.results,
              totalCount: res.count,
              offset: action.offset,
              limit: action.limit
            })
          ),
          catchError((error) => {
            return of(
              pokeListActions.loadPokesError({ error: error['statusText'] })
            );
          })
        );
      })
    )
  );

  constructor(private actions$: Actions, private apiService: ApiService) {}
}
