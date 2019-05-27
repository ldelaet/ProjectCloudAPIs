import { Component, OnInit } from '@angular/core';
import { DataService, Pokemons, Pokemon } from '../data.service';

@Component({
  selector: 'app-poke-dex',
  templateUrl: './poke-dex.component.html',
  styleUrls: ['./poke-dex.component.css']
})
export class PokeDexComponent implements OnInit {

  Pokemons: Pokemons;
  Pokemon: Pokemon;
  _searchID: number;
  _searchName: string;
  PagePointer: string;
  Image: string;
  error: {};
  errorMessage: string;

  

  constructor(private dataService: DataService){
  }
  getPokemonList(){
    return this.dataService.getPokemons(this.PagePointer)
    .subscribe(data => this.Pokemons = data)
  }
  ngOnInit(){
    this.PagePointer = "";
    
    this.getPokemonList();

  }
  nextPage(){

  }
}  
