import { Component, OnInit } from '@angular/core';
import { DataService, Pokemon, Pokemons } from './data.service';
import { rendererTypeName } from '@angular/compiler';
import { RouterModule } from '@angular/router'; 


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
  Image: string;
  error: {};
  errorMessage: string;

  constructor(private dataService: DataService){
  }
  getPokemon(){
    return this.dataService.getPokemon(this._searchID)
    .subscribe(data => this.Pokemon = data), this.Pokemon = null, this.errorMessage = "Dit ID werd niet terug gevonden";
    
  };
  getPokemonName(){
    return this.dataService.getPokemon(this._searchName)
    .subscribe(data => this.Pokemon = data),(this.Pokemon = null, this.errorMessage = "Deze naam werd niet terug gevonden")
  };
  
  
 
  ngOnInit(){
  }
  
  get SearchID() {
    return this._searchID;
  }
  set SearchID(value: number) {
    this._searchID = value;
    
      this.getPokemon();
        
    
    
    }

    get SearchName() {
      return this._searchName;
    }
    set SearchName(value: string) {
      this._searchName = value;
      
        this.getPokemonName();
        
      
  
      
      }
    
  }
  



