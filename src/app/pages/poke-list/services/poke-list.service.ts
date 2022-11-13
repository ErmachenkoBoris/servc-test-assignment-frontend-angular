import { Poke } from '../../../inrefaces/poke';
import { Injectable } from '@angular/core';
import { PokeListStoreService } from '../store/poke-list-store.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokeListService {
  constructor(private pokeListStoreService: PokeListStoreService) {}

  loadPokeList(offset: number, limit: number): void {
    return this.pokeListStoreService.loadPokeList(offset, limit);
  }

  getPokeList(): Observable<Poke[]> {
    return this.pokeListStoreService.getPokeList();
  }

  getTotalCount(): Observable<number> {
    return this.pokeListStoreService.getTotalCount();
  }

  getPokeListError(): Observable<string> {
    return this.pokeListStoreService.getPokeListError();
  }
}
