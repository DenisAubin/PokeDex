import { Component, Input, OnInit } from '@angular/core';
import { Pokemon } from '../Entity/pokemon';
import { PokemonServiceService } from '../pokemon-service.service';

@Component({
  selector: 'poke-card',
  templateUrl: './poke-card.component.html',
  styleUrls: ['./poke-card.component.scss'],
})
export class PokeCardComponent implements OnInit {
  @Input() pokemon: Pokemon | undefined;

  constructor() {}

  ngOnInit(): void {}
}
