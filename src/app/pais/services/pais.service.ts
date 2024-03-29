import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Country } from '../interfaces/paises.interface';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  private apiUrl:string ='https://restcountries.eu/rest/v2';
  private params:HttpParams = new HttpParams().set('fields', 'name;capital;alpha2Code;flag;population');

  constructor( private http:HttpClient) { }

  buscarPais(termino:string):Observable<Country[]>{
    const url = `${this.apiUrl}/name/${termino}`;

    return this.http.get<Country[]>(url, {params:this.params})
  }

  buscarCapital(termino:string):Observable<Country[]>{
    const url = `${this.apiUrl}/capital/${termino}`;

    return this.http.get<Country[]>(url, {params:this.params})
  }

  getPaisCode(id:string):Observable<Country>{
    const url = `${this.apiUrl}/alpha/${id}`;

    return this.http.get<Country>(url)
  }

  buscarRegion(termino:string):Observable<Country[]>{
    const url = `${this.apiUrl}/region/${termino}`;

    return this.http.get<Country[]>(url, {params:this.params}).pipe(tap(console.log))
  }
}
