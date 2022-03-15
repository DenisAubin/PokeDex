import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PokemonService } from '../pokemon.service';

import { PokedexComponent } from './pokedex.component';

describe('PokedexComponent', () => {
  let component: PokedexComponent;
  let fixture: ComponentFixture<PokedexComponent>;
  const mockedPokemonService = jasmine.createSpyObj('PokemonService', [
    'getPokemon','getList'
  ]);

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PokedexComponent ],
      providers: [
        { provide: PokemonService, useValue: mockedPokemonService },
      ],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PokedexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
