import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Poke } from '../../../inrefaces/poke';
import {
  selectPokeListError,
  selectPokeListValue,
  selectPokeTotalCountValue
} from './poke-list.selectors';
import { AppStore } from '../../../inrefaces/store';
import { pokeListActions } from './poke-list.actions';

@Injectable({
  providedIn: 'root'
})
export class PokeListStoreService {
  constructor(private store: Store<AppStore>) {}

  getPokeList(): Observable<Poke[]> {
    return this.store.pipe(select(selectPokeListValue));
  }

  getTotalCount(): Observable<number> {
    return this.store.pipe(select(selectPokeTotalCountValue));
  }

  getPokeListError(): Observable<string> {
    return this.store.pipe(select(selectPokeListError));
  }

  loadPokeList(offset: number, limit: number): void {
    this.store.dispatch(pokeListActions.loadPokes({ offset, limit }));
  }
}
