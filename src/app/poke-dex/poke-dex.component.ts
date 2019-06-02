import { Component, OnInit } from "@angular/core";
import { DataService, Pokemons, Pokemon } from "../services/data.service";
import { AuthService } from "../auth.service";

@Component({
  selector: "app-poke-dex",
  templateUrl: "./poke-dex.component.html",
  styleUrls: ["./poke-dex.component.css"]
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
  ID: number;

  constructor(private dataService: DataService, private auth: AuthService) {}
  getPokemonList() {
    return this.dataService
      .getPokemons(this.PagePointer)
      .subscribe(data => (this.Pokemons = data));
  }
  ngOnInit() {
    this.PagePointer = "";
    this.ID = 1;

    this.getPokemonList();
  }
  nextPage() {
    this.ID += 20;
    this.PagePointer = this.Pokemons.next.replace(this.dataService.apiUrl, "");
    this.getPokemonList();
  }
  prevPage() {
    this.ID -= 20;
    this.PagePointer = this.Pokemons.previous.replace(
      this.dataService.apiUrl,
      ""
    );
    this.getPokemonList();
  }
}
