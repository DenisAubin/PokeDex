import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Pokemon, PokeType } from './Entity/pokemon';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PokemonServiceService {

  private pokelist: Array<Pokemon>;
  private apiUrl: string;

  constructor(private http: HttpClient) {
    this.apiUrl = 'http://localhost:8080/poke/';
    this.pokelist=[];
    this.findAll().subscribe(list => this.pokelist = list);
  }

  public findAll(): Observable<Pokemon[]> {
    return this.http.get<Pokemon[]>(this.apiUrl+'pokeList');
  }

  public save(poke: Pokemon) {
    return this.http.post<Pokemon>(this.apiUrl, poke);
  }

  public findById(id :number): Observable<Pokemon>{
    return this.http.get<Pokemon>(this.apiUrl+ id);
  }

  public getList() : Pokemon[]{
    return this.pokelist;
  }

  public getPokemon(id:number) : Pokemon{
    return this.pokelist[id-1];
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
        return 'black';
      }
      case PokeType.Tenebres: {
        return 'black';
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
