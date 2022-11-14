import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PokeFullInfo } from './inrefaces/poke-full-info';
import { ApiLoadPokes } from './inrefaces/api/api-load-pokes';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(private http: HttpClient) {}

  /**
   * Fetch the list of pokemons from API
   * @param offset how many records to skip
   * @param limit how many records to return
   * @returns list of pokemons
   *
   * @url https://pokeapi.co/docs/v2#resource-listspagination-section
   */
  get(offset = 0, limit = 8): Observable<ApiLoadPokes> {
    return this.http.get<ApiLoadPokes>(
      `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`
    );
  }

  /**
   * Fetch a single pokemon from API
   * @param id id or name of the pokemon
   * @returns pokemon
   *
   * @url https://pokeapi.co/docs/v2#pokemon
   */
  getOne(id: number | string): Observable<PokeFullInfo> {
    return this.http.get<PokeFullInfo>(
      `https://pokeapi.co/api/v2/pokemon/${id}`
    );
  }
}
