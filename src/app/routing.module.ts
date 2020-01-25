import {NgModule, Component} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {NavbarComponent} from './components/navbar/navbar.component';
import {HeroesComponent} from './components/heroes/heroes.component';
import {AboutusComponent} from './components/aboutus/aboutus.component';
import { HeroeComponent } from './components/heroe/heroe.component';
//import { BuscadorComponent } from './component/buscador/buscador.component';
import {BuscadorComponent} from './components/buscador/buscador.component';
import { Buscador2Component } from './components/buscador2/buscador2.component';
import { PruebaComponent } from './components/prueba/prueba.component';


const routes: Routes =[
    {path: '', component: HomeComponent},
    {path: 'home', component: HomeComponent},
    {path: 'heroes', component: HeroesComponent},
    {path: 'navbar', component: NavbarComponent},
    {path: 'aboutus', component: AboutusComponent},
    {path: 'heroe', component: HeroeComponent},
    {path: 'heroe/:id', component: HeroeComponent},
    //{path: 'buscar/:termino', component: BuscadorComponent},
    {path: 'prueba/:termino', component: PruebaComponent},
    {path: 'buscar2/:termino', component: Buscador2Component},
    {path: '**', pathMatch: 'full', redirectTo: 'Home'}
];


@NgModule({
 imports: [RouterModule.forRoot(routes)],
 exports: [RouterModule]
})

export class AppRoutingModule{


}