import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PokemonService } from '../pokemon.service';

import { PokeDetailsComponent } from './poke-details.component';

describe('PokeDetailsComponent', () => {
  let component: PokeDetailsComponent;
  let fixture: ComponentFixture<PokeDetailsComponent>;
  const mockedPokemonService = jasmine.createSpyObj('PokemonService', [
    'pokeToGradient',
  ]);

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PokeDetailsComponent],
      providers: [
        { provide: PokemonService, useValue: mockedPokemonService },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PokeDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
