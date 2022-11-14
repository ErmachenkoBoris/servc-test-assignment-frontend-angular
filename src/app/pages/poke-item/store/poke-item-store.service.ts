import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import {
  selectPokeItemError,
  selectPokeItemValue
} from './poke-item.selectors';
import { AppStore } from '../../../inrefaces/store';
import { pokeItemActions } from './poke-item.actions';
import { PokeFullInfo } from '../../../inrefaces/poke-full-info';

@Injectable({
  providedIn: 'root'
})
export class PokeItemStoreService {
  constructor(private store: Store<AppStore>) {}

  getPokeItem(): Observable<PokeFullInfo> {
    return this.store.pipe(select(selectPokeItemValue));
  }

  getPokeItemError(): Observable<string> {
    return this.store.pipe(select(selectPokeItemError));
  }

  loadPokeItem(pokeId: string): void {
    this.store.dispatch(pokeItemActions.loadPokeItem({ pokeId }));
  }

  resetPoke(): void {
    this.store.dispatch(pokeItemActions.pokeReset());
  }
}
