import { Component, OnInit } from '@angular/core';
import { Pokemon, PokeType } from '../Entity/pokemon';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'pokedex',
  templateUrl: './pokedex.component.html',
  styleUrls: ['./pokedex.component.scss'],
})
export class PokedexComponent implements OnInit {
  selectedPoke: Pokemon | undefined;
  pokeService: PokemonService;
  detailsDisplayed = false;
  filter = {
    name: '',
    type: '',
  };

  constructor(pokeService: PokemonService) {
    this.pokeService = pokeService;
    this.selectedPoke = undefined;
  }

  ngOnInit(): void {}

  onPokeClick(poke: Pokemon) {
    if (this.selectedPoke != poke) {
      this.selectedPoke = poke;
      this.detailsDisplayed = true;
      this.scrollToPoke(poke);
    } else {
      this.selectedPoke = undefined;
      this.detailsDisplayed = false;
    }
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

  filtChange(filt: any) {
    this.filter = filt;
  }

  typeFilterChange(type: PokeType) {
    if (this.filter.type != type) {
      this.filter.type = type;
    } else {
      this.filter.type = '';
    }
  }

  scrollToPoke(poke: Pokemon) {
    var topPos = (document.getElementById(poke.id.toString()) as HTMLElement)
      .offsetTop;
    (
      window.document.getElementById('pokecards-container') as HTMLElement
    ).scrollTop = topPos - 80;
  }
}
