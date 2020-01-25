import { Component, OnInit } from '@angular/core';
//import {HeroesService} from '../../servicios/heroes.service';
import {Router} from '@angular/router';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})

export class NavbarComponent implements OnInit {

  parametro: string = "RUSIA";

  heroes: any[] = [];

  pageNum: string  = "dadsasdasdasda";

  constructor(private _router: Router) {

   }

  ngOnInit() {

      //this.heroes = this._heroeService
      
  }

  buscarHeroe(termino: string) {

    console.log(termino);

    console.log("hola cara de cola");
    
  }

  /*  
  buscarHeroe_2(parametro: string){

    
    if(parametro==""){
      
      alert("es una cadena vacía");
      //parametro=" ";
 
    }else{

      alert("es una cadena llena");
    }

    alert("el valor es" + parametro);
    console.log("-----------EL VALOR PASADO ES: " + parametro);

    //this._router.navigate(['/buscar',parametro]);

    this._router.navigate([`/buscar/${parametro}`]);

  }

  */

  buscarHeroe3(termino: string){
     
      //alert('buscarheroe3, llamando parametro' + this.parametro);

     


      //this._router.navigate(['/buscar2', this.parametro],      { queryParams: { page: this.pageNum, titulo: 'idiort' } });
      this._router.navigate(['/buscar2', this.parametro],      { queryParams: { page: termino, titulo: 'idiort' } });


  }



}
