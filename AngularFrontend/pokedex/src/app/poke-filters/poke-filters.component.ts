import { Type } from '@angular/compiler/src/compiler_facade_interface';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Pokemon, PokeType } from '../Entity/pokemon';
import { PokemonServiceService } from '../pokemon-service.service';

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

  pokeService : PokemonServiceService;

  @Output()
  filterEvent = new EventEmitter<any>();

  constructor(pokeService : PokemonServiceService) {
    this.pokeService = pokeService;
  }

  ngOnInit(): void {}

  updateFilter() {
    this.filter.name = this.nameControl.value.toLowerCase();
    this.filterEvent.emit(this.filter);
  }

  color(type: string){
    return this.pokeService.typeToColor(PokeType[<keyof typeof PokeType> type]);
  }
}
