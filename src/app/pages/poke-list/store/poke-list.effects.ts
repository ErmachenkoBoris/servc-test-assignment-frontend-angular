import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap, switchMap, tap } from 'rxjs/operators';
import { of } from 'rxjs';
import { ApiService } from '../../../api.service';
import {
  LOAD_POKES_TYPE,
  LoadPokesAction,
  pokeListActions
} from './poke-list.actions';
import { Poke } from '../../../inrefaces/poke';

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
              pokes: res.results,
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

function addImageSrc(poke: Poke): Poke {
  return {
    ...poke,
    imageSrc: `https://avatars.dicebear.com/api/avataaars/${poke.name}.svg`
  };
}
