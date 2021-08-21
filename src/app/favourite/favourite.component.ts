import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpServiceService } from '../http-service.service';
import { PokemonDetails } from '../PokemonList';

@Component({
  selector: 'app-favourite',
  templateUrl: './favourite.component.html',
  styleUrls: ['./favourite.component.css']
})
export class FavouriteComponent implements OnInit {

  constructor( private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,  
    private ApiInterface:HttpServiceService,) { }

  ngOnInit(): void {
    this.showFavourite();
  }
  favourite: PokemonDetails[] = [];
showFavourite(){
  var items = JSON.parse(localStorage.getItem('favourite'));
  if(items != undefined && items != null && items.length>0){
    this.favourite= items.filter(
      (thing, i, arr) => arr.findIndex(t => t.id === thing.id) === i
    );
    //this.favourite = items;
  }
  else{
    this.router.navigate(['../dashboard'], { relativeTo: this.route });
    alert("No favourites items.");
    
  }
}
delete(){
  this.favourite=[];
  localStorage.removeItem("favourite")
  this.router.navigate(['../dashboard'], { relativeTo: this.route });
}

}
