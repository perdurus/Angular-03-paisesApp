import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/paises.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styles: [
  ]
})
export class PorCapitalComponent{

  termino:string = '';
  hayError:boolean =false;
  paises:Country[] =[];
  placeholder:string = 'Introduce la capital de un país...';
  sugerencias:Country[] =[];

  constructor(private paisService: PaisService) { }

  buscar( termino:string){
    this.hayError = false;
    this.termino = termino;
    
    console.log(this.termino);
    this.paisService.buscarCapital(this.termino).subscribe(
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
    //this.mostrarSugerencia = true;

    this.paisService.buscarCapital(termino).subscribe(
      paises=> this.sugerencias = paises.splice(0,10),
      (err) => this.sugerencias=[]
    )
  }
}
