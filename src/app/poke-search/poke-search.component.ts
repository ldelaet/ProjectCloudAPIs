import { Component, OnInit } from "@angular/core";
import { DataService, Pokemon, Pokemons } from "../services/data.service";

@Component({
  selector: "app-poke-search",
  templateUrl: "./poke-search.component.html",
  styleUrls: ["./poke-search.component.css"]
})
export class PokeSearchComponent implements OnInit {
  Pokemons: Pokemons;
  Pokemon: Pokemon;
  _searchID: number;
  _searchName: string;
  Image: string;
  error: {};
  errorMessage: string;

  constructor(private dataService: DataService) {}
  getPokemon() {
    return (
      this.dataService
        .getPokemon(this._searchID)
        .subscribe(data => (this.Pokemon = data)),
      (this.Pokemon = null),
      (this.errorMessage = "Dit ID werd niet terug gevonden")
    );
  }
  getPokemonName() {
    return (
      this.dataService
        .getPokemon(this._searchName)
        .subscribe(data => (this.Pokemon = data)),
      ((this.Pokemon = null),
      (this.errorMessage = "Deze naam werd niet terug gevonden"))
    );
  }

  ngOnInit() {}

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
