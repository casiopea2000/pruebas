import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {HeroesService} from '../../servicios/heroes.service'; 

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.css']
})
export class BuscadorComponent implements OnInit {

  valor: boolean = false;

  longitud: number ;

  parametro: string;

  public listadoDeHeroes: Heroe[] = [];

  constructor(private _activatedroute: ActivatedRoute, private _miservicio: HeroesService) { }


  ngOnInit() {

    //console.clear();
    console.log("INICIAMOS!!!! ");

    console.log("buscar");

    this._activatedroute.params.subscribe(params => {
      console.log("el parametro es:  " + params['termino']);

      this.parametro = params[ 'termino' ];

      alert("parametro pasado es" + this.parametro + "_");

      this.listadoDeHeroes = this._miservicio.localizarHeores(params['termino']);

      console.log("el listado de héroes es" + this.listadoDeHeroes);

      console.log("la longitus del listadode Héroes es de " + this.listadoDeHeroes.length);

      this.longitud = this.listadoDeHeroes.length;

    })

    

    
  }

}


export interface Heroe {
  nombre: string;
  bio: string;
  img: string;
  aparicion: string;
  casa: string;
}
