import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PokemonService } from '../pokemon.service';

import { PokeCardComponent } from './poke-card.component';

describe('PokeCardComponent', () => {
  let component: PokeCardComponent;
  let fixture: ComponentFixture<PokeCardComponent>;
  const mockedPokemonService = jasmine.createSpyObj('PokemonService', ['typeToColor']);

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PokeCardComponent ],
      providers: [{provide: PokemonService, useValue:mockedPokemonService}]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PokeCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
