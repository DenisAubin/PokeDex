import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
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
  filter = {
    name: '',
    type: '',
  };

  constructor(pokeService: PokemonServiceService, fb: FormBuilder) {
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
    if (this?.selectedPoke != undefined) {
      return poke.id == this.selectedPoke.id;
    }
    return false;
  }

  nameChange(filt: any) {
    this.filter = filt;
  }
}
