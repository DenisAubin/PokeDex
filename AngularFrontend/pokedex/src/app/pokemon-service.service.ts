import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Pokemon } from './Entity/pokemon';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokemonServiceService {

  private apiUrl :string;

  constructor(private http: HttpClient) {
    this.apiUrl= 'http://localhost:8080/poke/pokeList';
  }

  public findAll(): Observable<Pokemon[]> {
    return this.http.get<Pokemon[]>(this.apiUrl);
  }

  public save(poke: Pokemon) {
    return this.http.post<Pokemon>(this.apiUrl, poke);
  }
}
