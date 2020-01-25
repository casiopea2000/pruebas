import { Component, OnInit, } from '@angular/core';
import { ActivatedRoute,  Router} from '@angular/router';
import {HeroesService} from '../../servicios/heroes.service';




@Component({
  selector: 'app-buscador2',
  templateUrl: './buscador2.component.html',
  styleUrls: ['./buscador2.component.css']
})
export class Buscador2Component implements OnInit {

  constructor( private miservicio: HeroesService, private miruta: ActivatedRoute) { 

    

    


  }

  ngOnInit() {

    alert ("cargando ONINIT");

    console.log("constructor de buscador2");

    
  
    this.miruta.params.subscribe((param) =>{

      console.log('Los parametros FIJOS pasados son:');
      console.log(param);
      alert("parametros" + param);
    });

    this.miruta.queryParams.subscribe((queryParam)=>{

      console.log('Los parametros variables pasados son:');
      console.log(queryParam);

      alert("parametros" + queryParam);

      console.log("el valor del parametro es " + queryParam.page);
      console.log("el valor del segundo componente es:" + queryParam.idiot);
      
    });
    
  }

}
