import { Injectable } from '@angular/core';
import {select, Store} from "@ngrx/store";
import {Observable} from "rxjs";
import {Poke} from "../../../inrefaces/poke";
import {selectPokeListValue} from "./poke-list.selectors";
import {AppStore} from "../../../inrefaces/store";
import {pokeListActions} from "./poke-list.actions";

@Injectable({
  providedIn: 'root'
})
export class PokeListStoreService {
  constructor(private store: Store<AppStore>) {}

  getPokeList(): Observable<Poke[]> {
    return this.store.pipe(select(selectPokeListValue));
  }

  loadPokeList(): void {
    this.store.dispatch(pokeListActions.loadPokes());
  }
}
