import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';
import { PokeType } from '../Entity/pokemon';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'poke-filters',
  templateUrl: './poke-filters.component.html',
  styleUrls: ['./poke-filters.component.scss'],
})
export class PokeFiltersComponent implements OnInit {
  filter = {
    name: '',
    type: '',
  };

  types = PokeType;
  nameControl = new FormControl('');

  pokeService: PokemonService;

  @Output()
  filterEvent = new EventEmitter<any>();

  constructor(pokeService: PokemonService) {
    this.pokeService = pokeService;
  }

  ngOnInit(): void {}

  color(type: string) {
    return this.pokeService.typeToColor(PokeType[<keyof typeof PokeType>type]);
  }

  updateFilter() {
    this.filter.name = this.nameControl.value.toLowerCase();
    this.filterEvent.emit(this.filter);
  }

  selectType(type: string) {
    if (this.filter.type == type.toUpperCase()) {
      this.filter.type = '';
    } else {
      this.filter.type = type.toUpperCase();
    }
    this.updateFilter();
  }
}
