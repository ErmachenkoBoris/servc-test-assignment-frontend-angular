import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import {storeReducers} from "./store/reducers";
import {EffectsModule} from "@ngrx/effects";
import {storeEffects} from "./store/effects";
import {PokeListModule} from "./pages/poke-list/poke-list.module";
import {StoreDevtoolsModule} from "@ngrx/store-devtools";
import {environment} from "../environments/environment";


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot(storeReducers),
    EffectsModule.forRoot(storeEffects),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
      autoPause: true,
    }),
    PokeListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
