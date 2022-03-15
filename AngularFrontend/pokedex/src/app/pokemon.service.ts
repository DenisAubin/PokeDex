import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Pokemon, PokeType } from './Entity/pokemon';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  private pokelist: Array<Pokemon>;
  private apiUrl: string;

  constructor(private http: HttpClient) {
    this.apiUrl = 'http://localhost:8080/poke/';
    this.pokelist = [];
    this.findAll().subscribe((list) => (this.pokelist = list));
  }

  public findAll(): Observable<Pokemon[]> {
    return this.http.get<Pokemon[]>(this.apiUrl + 'pokeList');
  }

  public save(poke: Pokemon) {
    return this.http.post<Pokemon>(this.apiUrl, poke);
  }

  public findById(id: number): Observable<Pokemon> {
    return this.http.get<Pokemon>(this.apiUrl + id);
  }

  public getList(filter: any): Pokemon[] {
    var filteredList = this.pokelist.filter((pokemon) => {
      return pokemon.name.toLowerCase().includes(filter.name);
    });
    if (filter.type != '') {
      var filteredList = filteredList.filter((pokemon) => {
        return pokemon.type1 == filter.type || pokemon.type2 == filter.type;
      });
    }
    return filteredList;
  }

  public getPokemon(id: number): Pokemon {
    return this.pokelist[id - 1];
  }

  public pokeToGradient(poke: Pokemon) {
    if (poke.type1 && poke.type2) {
      const color1 = this.typeToColor(poke.type1);
      const color2 = this.typeToColor(poke.type2);
      return 'radial-gradient(circle, ' + color1 + ' 75%, ' + color2 + ' 100%)';
    } else {
      return this.typeToColor(poke.type1);
    }
  }

  public typeToColor(type: PokeType) {
    switch (type) {
      case PokeType.Acier: {
        return 'grey';
      }
      case PokeType.Combat: {
        return 'red';
      }
      case PokeType.Dragon: {
        return 'blue';
      }
      case PokeType.Eau: {
        return 'blue';
      }
      case PokeType.Electrik: {
        return 'yellow';
      }
      case PokeType.Fee: {
        return 'pink';
      }
      case PokeType.Feu: {
        return 'orange';
      }
      case PokeType.Glace: {
        return 'aqua';
      }
      case PokeType.Insecte: {
        return 'green';
      }
      case PokeType.Normal: {
        return 'grey';
      }
      case PokeType.Plante: {
        return 'green';
      }
      case PokeType.Poison: {
        return 'purple';
      }
      case PokeType.Psy: {
        return 'pink';
      }
      case PokeType.Roche: {
        return 'grey';
      }
      case PokeType.Sol: {
        return 'grey';
      }
      case PokeType.Spectre: {
        return 'purple';
      }
      case PokeType.Tenebres: {
        return 'purple';
      }
      case PokeType.Vol: {
        return 'blue';
      }
      default: {
        return 'black';
      }
    }
  }
}
