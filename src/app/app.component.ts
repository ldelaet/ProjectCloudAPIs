import { Component, OnInit } from '@angular/core';
import { DataService, Pokemon, Pokemons } from './data.service';
import { rendererTypeName } from '@angular/compiler';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  Pokemons: Pokemons;
  Pokemon: Pokemon;
  _searchID: number;
  _searchName: string;
  Wrong: boolean = false;
  Image: string;

  constructor(private dataService: DataService){
  }
  getPokemon(){
    return this.dataService.getPokemon(this._searchID)
    .subscribe(data => this.Pokemon = data);
    
  }
  getPokemonName(){
    return this.dataService.getPokemon(this._searchName)
    .subscribe(data => this.Pokemon = data);
    
  }
 
  ngOnInit(){
  }
  get SearchID() {
    return this._searchID;
  }
  set SearchID(value: number) {
    this._searchID = value;
    if(this._searchID != null && this._searchID != 0 && this._searchID <= 964) {
      this.getPokemon();
      
      this.Wrong = false;
    }
    if(this._searchID == null || this._searchID == 0)
    {this.Wrong = true;}

    
    }

    get SearchName() {
      return this._searchName;
    }
    set SearchName(value: string) {
      this._searchName = value;
      if(this._searchName != null) {
        this.getPokemonName();
        
        this.Wrong = false;
      }
      if(this._searchName == null || this._searchName == "")
      {this.Wrong = true;}
  
      
      }
    
  }
  



