import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { catchError, map, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { ApiService } from '../../../api.service';
import {
  LOAD_POKE_ITEM_TYPE,
  LoadPokeAction,
  pokeItemActions
} from './poke-item.actions';
import { PokeFullInfo } from '../../../inrefaces/poke-full-info';
import { addImageSrc } from '../../../utils/addImageSrc';

@Injectable()
export class PokeItemEffects {
  loadPokesEffect$ = createEffect(() =>
    this.actions$.pipe(
      ofType(LOAD_POKE_ITEM_TYPE),
      switchMap((action: LoadPokeAction) => {
        return this.apiService.getOne(action?.pokeId).pipe(
          map((res) => {
            return addImageSrc(res);
          }),
          map((res) =>
            pokeItemActions.loadPokeItemSuccess({
              poke: <PokeFullInfo>res
            })
          ),
          catchError((error) => {
            return of(
              pokeItemActions.loadPokeItemError({ error: error['statusText'] })
            );
          })
        );
      })
    )
  );

  constructor(private actions$: Actions, private apiService: ApiService) {}
}
