import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PokemonServiceService } from '../pokemon-service.service';

import { PokeDetailsComponent } from './poke-details.component';

describe('PokeDetailsComponent', () => {
  let component: PokeDetailsComponent;
  let fixture: ComponentFixture<PokeDetailsComponent>;
  const mockedPokemonService = jasmine.createSpyObj('PokemonServiceService', [
    'pokeToGradient',
  ]);

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PokeDetailsComponent],
      providers: [
        { provide: PokemonServiceService, useValue: mockedPokemonService },
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
