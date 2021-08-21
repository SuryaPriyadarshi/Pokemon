import { Injectable } from '@angular/core';
import { PokemonList } from './PokemonList';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  pokeInfo: PokemonList;

  constructor() { }
  setOption(item: PokemonList) {      
    this.pokeInfo = item;  
  }  
  
  getOption() {  
    return this.pokeInfo;  
  }
}
