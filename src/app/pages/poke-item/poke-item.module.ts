import { NgModule } from '@angular/core';
import { PokeItemComponent } from './poke-item.component';
import { RouterModule, Routes } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
import { PokeItemEffects } from './store/poke-item.effects';
import { StoreModule } from '@ngrx/store';
import {
  POKE_ITEM_REDUCER_NAME,
  pokeItemReducer
} from './store/poke-item.reducer';
import { CommonModule } from '@angular/common';
import { PokeStatsItemComponent } from './components/poke-stats-item.component';

const routes: Routes = [
  {
    path: '',
    component: PokeItemComponent
  }
];

@NgModule({
  declarations: [PokeItemComponent, PokeStatsItemComponent],
  imports: [
    StoreModule.forFeature(POKE_ITEM_REDUCER_NAME, pokeItemReducer),
    EffectsModule.forFeature([PokeItemEffects]),
    RouterModule.forChild(routes),
    CommonModule
  ],
  providers: [],
  exports: [PokeItemComponent]
})
export class PokeItemModule {}
