import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { PokeListComponent } from './poke-list.component';

@NgModule({
  declarations: [
    PokeListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
  ],
  providers: [],
  exports: [
    PokeListComponent
  ],
  bootstrap: [PokeListComponent]
})
export class PokeListModule { }
