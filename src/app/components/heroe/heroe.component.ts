import { Component, OnInit } from '@angular/core';
import {HeroesService} from '../../servicios/heroes.service';
import {ActivatedRoute} from '@angular/router';



@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.css']
})
export class HeroeComponent implements OnInit {

  miHeroe:any = {};

  constructor(private activatedRoute: ActivatedRoute, private _heroesService: HeroesService ) {

    this.activatedRoute.params.subscribe( params =>{
      console.log('el parametro es ' + params['id']);

      this.miHeroe=this._heroesService.visualizarHeroe(params['id']);

      console.log(this.miHeroe);

    });
   }

  ngOnInit() {
  }

}
