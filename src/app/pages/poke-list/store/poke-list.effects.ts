import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap, tap } from 'rxjs/operators';
import { of } from 'rxjs';
import {ApiService} from "../../../api.service";
import {LOAD_POKES_TYPE, pokeListActions} from "./poke-list.actions";
import {Poke} from "../../../inrefaces/poke";

@Injectable()
export class PokeListEffects {
  loadPokesEffect$ = createEffect(
    () => this.actions$.pipe(
      ofType(LOAD_POKES_TYPE),
      mergeMap((action) => {
        return this.apiService.get().pipe(
          map(res => pokeListActions.loadPokesSuccess({ pokes: res.results })),
          catchError(error => of(pokeListActions.loadPokesError({ error }))),
        );
        }
      )
    )
  )

  constructor(private actions$: Actions, private apiService: ApiService) { }
}
