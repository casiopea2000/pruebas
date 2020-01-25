import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {HeroesService} from './servicios/heroes.service';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { HomeComponent } from './components/home/home.component';
import { AppRoutingModule} from './routing.module';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import {HeroeComponent} from './components/heroe/heroe.component';
import {BuscadorComponent} from './components/buscador/buscador.component';
import {Buscador2Component} from './components/buscador2/buscador2.component';
import {PruebaComponent} from './components/prueba/prueba.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeroesComponent,
    HomeComponent,
    AboutusComponent,
    HeroeComponent,
    BuscadorComponent,
    Buscador2Component,
    PruebaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [HeroesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
