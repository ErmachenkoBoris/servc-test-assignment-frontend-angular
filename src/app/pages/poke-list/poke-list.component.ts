import {Component, OnInit} from '@angular/core';
import {PokeListService} from "./services/poke-list.service";

@Component({
  selector: 'app-poke-list',
  templateUrl: './poke-list.component.html',
  styleUrls: ['./poke-list.component.scss']
})
export class PokeListComponent implements OnInit{
  title = 'app-poke-list';

  constructor(private pokeListService: PokeListService) {
  }

  ngOnInit(): void {
    this.pokeListService.loadPokeList();
  }
}
