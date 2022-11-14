import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PokeListComponent } from './pages/poke-list/poke-list.component';

const routes: Routes = [
  { path: '', component: PokeListComponent, pathMatch: 'full' },
  {
    path: 'poke-item',
    loadChildren: () =>
      import('./pages/poke-item/poke-item.module').then((m) => m.PokeItemModule)
  },
  { path: '**', component: PokeListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
