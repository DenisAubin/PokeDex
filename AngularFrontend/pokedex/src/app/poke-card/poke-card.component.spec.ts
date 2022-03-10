import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PokemonServiceService } from '../pokemon-service.service';

import { PokeCardComponent } from './poke-card.component';

describe('PokeCardComponent', () => {
  let component: PokeCardComponent;
  let fixture: ComponentFixture<PokeCardComponent>;
  const mockedPokemonService = jasmine.createSpyObj('PokemonServiceService', ['typeToColor']);

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PokeCardComponent ],
      providers: [{provide: PokemonServiceService, useValue:mockedPokemonService}]
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
