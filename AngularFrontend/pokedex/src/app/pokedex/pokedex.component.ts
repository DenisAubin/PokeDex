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

  pokelist: Observable<Array<Pokemon>>;

  constructor(pokeService : PokemonServiceService) {
    this.pokelist = pokeService.findAll();

    /*
    this.pokelist.push(new Pokemon("Bulbizarre",1));
    this.pokelist.push(new Pokemon("Herbizarre",2));
    this.pokelist.push(new Pokemon("Florizarre",3));
    this.pokelist.push(new Pokemon("Salameche",4));
    this.pokelist.push(new Pokemon("Reptincel",5));
    this.pokelist.push(new Pokemon("Dracaufeu",6));
    for (let i = 7; i < 31; i++) {
      this.pokelist.push(new Pokemon("Dracaufeu",i));

    }*/
  }

  ngOnInit(): void {
  }

}
