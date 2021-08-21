import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { PokemonDetails, PokemonList, PokemonObject } from './PokemonList';

@Injectable({
  providedIn: 'root'
})
export class HttpServiceService {

  baseUrl: string = "";
  constructor(private http: HttpClient, private router: Router) {
  }
  
  getReqPokemon(url: string): Observable<PokemonObject> {
    const reqUrl = url;
    const headers = { 'content-type': 'application/json', 'Accept': 'application/json','Access-Control-Allow-Origin': '*'}
    return this.http.get<PokemonObject>(reqUrl, {'headers':headers})
    .pipe(res => res, err=> err);     
  }


  getReqPokemonDetail(url: string): Observable<PokemonDetails> {
    const reqUrl = url;
    const headers = { 'content-type': 'application/json', 'Accept': 'application/json','Access-Control-Allow-Origin': '*'}
    return this.http.get<PokemonDetails>(reqUrl, {'headers':headers})
    .pipe(res => res, err=> err);     
  }
}
