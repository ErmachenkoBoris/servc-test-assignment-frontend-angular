import {Poke} from "../../../inrefaces/poke";
import {Injectable} from "@angular/core";
import {PokeListStoreService} from "../store/poke-list-store.service";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PokeListService {
  constructor(private pokeListStoreService: PokeListStoreService) {}

  loadPokeList(): void {
    return this.pokeListStoreService.loadPokeList();
  }
}
