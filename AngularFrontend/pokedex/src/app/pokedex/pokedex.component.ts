import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Pokemon } from '../Entity/pokemon';
import { PokemonServiceService } from '../pokemon-service.service';

@Component({
  selector: 'pokedex',
  templateUrl: './pokedex.component.html',
  styleUrls: ['./pokedex.component.scss']
})
export class PokedexComponent implements OnInit {

  selectedPoke : Pokemon | undefined;
  pokeService: PokemonServiceService;

  constructor(pokeService : PokemonServiceService) {
    this.pokeService=pokeService
    this.selectedPoke = undefined;
  }

  ngOnInit(): void {
  }

  onPokeClick(poke : Pokemon){
    console.log(poke);
    this.selectedPoke=poke;
  }

  onPokeChange(id : number){
    this.selectedPoke=this.pokeService.getPokemon(id);
  }

}
