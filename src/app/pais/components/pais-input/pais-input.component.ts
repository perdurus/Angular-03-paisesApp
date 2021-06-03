import { Component, EventEmitter, Output, OnInit, Input} from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { Country } from '../../interfaces/paises.interface';

@Component({
  selector: 'app-pais-input',
  templateUrl: './pais-input.component.html',
  styles: [
  ]
})
export class PaisInputComponent implements OnInit{

  @Output() onEnter:EventEmitter<string> = new EventEmitter();
  @Output() onDebounce:EventEmitter<string> = new EventEmitter();
  @Input() placeholder:string = '';
  @Input() termino:string ='';
  @Input() sugerencias:Country[] =[];

  mostrarSugerencia: boolean = false;

  debouncer: Subject<string> = new Subject();
  
  constructor() { }

  ngOnInit(){
    this.debouncer.
    pipe(debounceTime(300)).
    subscribe(
      valor=>{
        this.onDebounce.emit(valor);
        this.mostrarSugerencia = this.termino.length > 0 ? true : false;
      }
    );
  }
  
  teclaPresionada(){
    this.debouncer.next(this.termino);
  }

  buscar(){
    this.onEnter.emit(this.termino);
    this.mostrarSugerencia = false;
    //console.log('Hola mundo' + this.termino);
  }
}
