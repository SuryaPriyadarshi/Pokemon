import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpServiceService } from '../http-service.service';
import { PokemonList, PokemonObject } from '../PokemonList';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,  
    private ApiInterface:HttpServiceService,
    private sharedService:SharedService
) { 
}

  ngOnInit() {
    this.dashboard = this.fb.group({
      name: this.fb.array([])
    });
  }

  dashboard! : FormGroup;
  loading = false;
  submitted = false;
  pokemonList;
  pokeObjValue:PokemonObject;
  

  onSubmit() {        
    this.ApiInterface.getReqPokemon("https://pokeapi.co/api/v2/pokemon/").subscribe(
      res=>this.success(res),
      err=>this.error(err)
    );
  }

  success(res: PokemonObject){
   debugger;
   this.pokeObjValue = res;
    this.pokemonList = res.results;   
   
    }
    error(err:any){
      console.log(err);
     window.alert('Please try again');
     this.loading = false;
     this.submitted=false;
    }

    get f() { return this.dashboard.controls; }

    pokemonDetail(item:PokemonList) {
      this.submitted = true;
   
      this.loading = true;
      this.sharedService.setOption(item);
      this.router.navigate(['../details'], { relativeTo: this.route });
    }

    products: PokemonList[] = [];

addFavourite(item:PokemonList){
  
    this.products.push(item);
      localStorage.setItem("favourite",JSON.stringify(this.products))
      console.log( JSON.parse(localStorage.getItem('favourite')));
    }

compareItems:any;
onChange(item:PokemonList,isChecked: boolean) {
  const itemsList = (this.dashboard.controls.name as FormArray);

 
    if (isChecked) {
      itemsList.push(new FormControl(name));
    } else {
      const index = itemsList.controls.findIndex(x => x.value === name);
      itemsList.removeAt(index);
    }
    this.compareItems = itemsList;
}

comparePokemon(){

}

pagination(url:string){
  this.ApiInterface.getReqPokemon(url).subscribe(
    res=>this.success(res),
    err=>this.error(err)
  );
}
}
