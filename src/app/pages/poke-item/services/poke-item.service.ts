import { Injectable } from '@angular/core';
import { PokeItemStoreService } from '../store/poke-item-store.service';
import { Observable } from 'rxjs';
import { PokeFullInfo } from '../../../inrefaces/poke-full-info';
import { pokeItemActions } from '../store/poke-item.actions';

@Injectable({
  providedIn: 'root'
})
export class PokeItemService {
  constructor(private pokeItemStoreService: PokeItemStoreService) {}

  loadPokeItem(pokeId: string): void {
    return this.pokeItemStoreService.loadPokeItem(pokeId);
  }

  getPokeItem(): Observable<PokeFullInfo> {
    return this.pokeItemStoreService.getPokeItem();
  }

  getPokeItemError(): Observable<string> {
    return this.pokeItemStoreService.getPokeItemError();
  }

  resetPoke(): void {
    this.pokeItemStoreService.resetPoke();
  }
}
