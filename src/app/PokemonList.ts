export class PokemonList{
    constructor(response:any)
{
      this.name=response.userName;
      this.url =response.userId;
    };

 name: string;
 url :string;
 

}

export class PokemonObject{
  constructor(response:any)
{
    this.count=response.count;
    this.next =response.next;
    this.previous =response.previous;
    this.results =response.results;
    this.results = response.results.map(pok => new PokemonList(pok));
  };

count: number;
next:string;
previous :string;
results:PokemonList[];


}

export class PokemonDetails{
  constructor(response:any){
    this.name = response.name;
    this.height= response.height;
    this.id = response.id;
    this.weight = response.weight;
    this.sprites = response.sprites;
    this.abilities = response.abilities;
    this.stats= response.stats;
    this.types = response.types;
    this.base_experience = response.base_experience;
    this.location_area_encounters = response.location_area_encounters;
    this.moves = response.moves;
  }

  name:string;
  height:number;
  id:number;
  weight:number;
  sprites:any;
  abilities:any;
  stats:any;
  types:any;
  base_experience:number;
  location_area_encounters:string;
  moves:any;
}