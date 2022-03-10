import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Pokemon, PokeType } from '../Entity/pokemon';
import { PokemonServiceService } from '../pokemon-service.service';

@Component({
  selector: 'poke-card',
  templateUrl: './poke-card.component.html',
  styleUrls: ['./poke-card.component.scss'],
})
export class PokeCardComponent implements OnInit {
  @Input() pokemon: Pokemon | undefined;

  pokeService: PokemonServiceService;

  @Output()
  filterEvent = new EventEmitter<any>();

  constructor(pokeService: PokemonServiceService) {
    this.pokeService = pokeService;
  }

  ngOnInit(): void {}

  color(type: PokeType | undefined) {
    return this.pokeService.typeToColor(type as PokeType);
  }

  updateFilter(type: PokeType | undefined) {
    this.filterEvent.emit(type as PokeType);
  }
}
