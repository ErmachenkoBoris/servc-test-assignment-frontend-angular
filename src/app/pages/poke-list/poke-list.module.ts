import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { PokeListComponent } from './poke-list.component';
import { PokeListItemCardComponent } from './components/poke-list-item-card.component';
import { PaginationModule } from '../../shared/pagination/pagination.module';

@NgModule({
  declarations: [PokeListComponent, PokeListItemCardComponent],
  imports: [BrowserModule, HttpClientModule, PaginationModule],
  providers: [],
  exports: [PokeListComponent]
})
export class PokeListModule {}
