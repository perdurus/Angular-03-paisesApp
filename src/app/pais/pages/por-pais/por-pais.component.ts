import { Component, OnInit } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/paises.interface';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [
  ]
})
export class PorPaisComponent  {

  termino:string = '';
  hayError:boolean =false;
  paises:Country[] =[];
  placeholder:string = 'Introduce un país...';

  constructor(private paisService: PaisService) { }

  buscar( termino:string){
    this.hayError = false;
    this.termino = termino;
    
    console.log(this.termino);
    this.paisService.buscarPais(this.termino).subscribe(
      paises=>{
        console.log(paises);
        this.paises = paises;
      }, 
      err=>{ 
        this.hayError = true;
        this.paises = [];
    });
    //this.paises.length();
  }

  sugerencias( termino:string){
    this.hayError = false;
  }
}
