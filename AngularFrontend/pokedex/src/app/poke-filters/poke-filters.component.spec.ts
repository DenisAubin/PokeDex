import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PokemonService } from '../pokemon.service';
import { TypesToArrayPipe } from '../types-to-array.pipe';

import { PokeFiltersComponent } from './poke-filters.component';

describe('PokeFiltersComponent', () => {
  let component: PokeFiltersComponent;
  let fixture: ComponentFixture<PokeFiltersComponent>;
  const mockedPokemonService = jasmine.createSpyObj('PokemonService', ['typeToColor']);

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PokeFiltersComponent, TypesToArrayPipe ],
      providers: [{provide: PokemonService, useValue:mockedPokemonService}]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PokeFiltersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
