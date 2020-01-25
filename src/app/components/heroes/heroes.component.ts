import { Component, OnInit } from '@angular/core';
import {HeroesService} from '../../servicios/heroes.service';


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes: any[] = [];

  constructor(private _heroesService: HeroesService) { 

    console.log('ejecutamos el constructor');

    this.heroes=_heroesService.getHeroes();

  }

  ngOnInit() {

    this.heroes = this._heroesService.getHeroes();

    alert("ONINIT HEROES");

    console.log('OnInit');

    console.log(this.heroes);


  }


}
