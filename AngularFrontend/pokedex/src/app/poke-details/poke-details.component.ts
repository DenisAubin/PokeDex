
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Pokemon } from '../Entity/pokemon';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'poke-details',
  templateUrl: './poke-details.component.html',
  styleUrls: ['./poke-details.component.scss'],
})
export class PokeDetailsComponent implements OnInit {
  @Input() pokemon: Pokemon | undefined;

  pokeService: PokemonService;

  @Output() pokeChange : EventEmitter<number> = new EventEmitter<number>();

  constructor(pokeService: PokemonService) {
    this.pokeService = pokeService;
  }

  ngOnInit(): void {}

  public color() {
    if (this.pokemon) {
      return this.pokeService.pokeToGradient(this.pokemon);
    }
    return 'black';
  }

  public onPokeClick(id : number | undefined){
    if (id != undefined) {
      this.pokeChange.emit(id);
    }
  }
}
