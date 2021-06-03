import { Component, OnInit } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/paises.interface';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styles: [`button {margin-right: 5px;} `]
})
export class PorRegionComponent {

  regiones: string[] = ['africa', 'americas', 'asia', 'europe', 'oceania'];
  regionActiva: string='';
  termino:string = '';
  paises:Country[] =[];
  
  constructor(private paisService: PaisService) { }

  activarRegion(region:string){
    this.regionActiva = region;

    if (region !== this.regionActiva){
      this.paises = [];
    }

    // TODO: hacer el llamos a la acciópn
  }

  getClaseCSS(region:string):string{
    return (region === this.regionActiva) ? 'btn btn-primary' : 'btn btn-outline-primary'; 
  }

  buscar( termino:string){
    this.termino = termino;
    
    console.log(this.termino);
    this.paisService.buscarRegion(this.termino).subscribe(
      paises=>{this.paises = paises;});
    //this.paises.length();
  }
}
