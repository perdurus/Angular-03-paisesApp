import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/paises.interface';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [
    `li{cursor: pointer;}`
  ]
})
export class PorPaisComponent  {
  
  //@Output() onClick:EventEmitter<string> = new EventEmitter();

  termino:string = '';
  hayError:boolean =false;
  paises:Country[] =[];
  sugerencias:Country[] =[];
  placeholder:string = 'Introduce un país...';
  mostrarSugerencia: boolean = false;

  constructor(private paisService: PaisService) { }

  buscar( termino:string){
    this.hayError = false;
    this.termino = termino;
    this.mostrarSugerencia = false;
    
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

  getSugerencias( termino:string){
    this.hayError = false;
    this.termino = termino;
    this.mostrarSugerencia = true;

    this.paisService.buscarPais(termino).subscribe(
      paises=> this.sugerencias = paises.splice(0,10),
      (err) => this.sugerencias=[]
    )
  }

}
