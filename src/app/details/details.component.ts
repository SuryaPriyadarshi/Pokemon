import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpServiceService } from '../http-service.service';
import { PokemonDetails } from '../PokemonList';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router, 
    private shareDataService:SharedService,
    private ApiInterface:HttpServiceService
) { }

detailForm! : FormGroup;
pokemonDetail;
name:string;
height:number;
weight:number;
ability:number;
abilities:[];
  ngOnInit(): void {

    this.detailForm = this.formBuilder.group({
      goldprice: [0, Validators.required],
      weight: [0.0, Validators.required],   
    });

    this.onSubmit();
  }


  onSubmit() {
    var item = this.shareDataService.getOption(); 
    var itemUrl = "";
    if(item != undefined && item != null && item.url !=undefined && item.url != null){
      localStorage.removeItem('pokemonId');
      localStorage.setItem('pokemonId', item.url);
      itemUrl = item.url;
    }
    else{
      itemUrl = localStorage.getItem('pokemonId');

    }
    
    this.ApiInterface.getReqPokemonDetail(itemUrl).subscribe(
      res=>this.success(res),
      err=>this.error(err)
    );      
  }

  success(res: PokemonDetails){  
    console.log(res);
    this.pokemonDetail = res;
    
    
    }
    error(err:any){     
      console.log(err);
     window.alert('Please try again');     
    }

    products: PokemonDetails[] = [];
    addFavourite(item:PokemonDetails){
      var fav = JSON.parse(localStorage.getItem('favourite'));
      if(fav!=undefined && fav != null){
        this.products = fav;
      }     
      if(this.products.indexOf(item) === -1)
      {
        this.products.push(item);
        localStorage.setItem("favourite",JSON.stringify(this.products))
        console.log( JSON.parse(localStorage.getItem('favourite')));
      }
        
    }
}
