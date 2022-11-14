import { NgModule } from '@angular/core';

import { PokeListComponent } from './poke-list.component';
import { PokeListItemCardComponent } from './components/poke-list-item-card.component';
import { PaginationModule } from '../../shared/pagination/pagination.module';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [PokeListComponent, PokeListItemCardComponent],
  imports: [PaginationModule, CommonModule],
  providers: [],
  exports: [PokeListComponent]
})
export class PokeListModule {}
