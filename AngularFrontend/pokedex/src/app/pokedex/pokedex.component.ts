import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Pokemon } from '../Entity/pokemon';
import { PokemonServiceService } from '../pokemon-service.service';

@Component({
  selector: 'pokedex',
  templateUrl: './pokedex.component.html',
  styleUrls: ['./pokedex.component.scss'],
})
export class PokedexComponent implements OnInit {
  selectedPoke: Pokemon | undefined;
  pokeService: PokemonServiceService;
  detailsDisplayed = false;

  constructor(pokeService: PokemonServiceService) {
    this.pokeService = pokeService;
    this.selectedPoke = undefined;
  }

  ngOnInit(): void {}

  onPokeClick(poke: Pokemon) {
    this.selectedPoke = poke;
    this.detailsDisplayed = true;
  }

  onPokeChange(id: number) {
    this.selectedPoke = this.pokeService.getPokemon(id);
  }

  isSelected(poke: Pokemon) {
    console.log(poke);
    if (this?.selectedPoke != undefined) {
      return poke.id == this.selectedPoke.id;
    }
    return false;
  }
}
