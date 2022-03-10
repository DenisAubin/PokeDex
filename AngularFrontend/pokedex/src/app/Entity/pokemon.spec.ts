import { TestBed } from '@angular/core/testing';

import { Pokemon, PokeType } from './pokemon';

describe('Pokemon', () => {

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Pokemon ]
    })
    .compileComponents();
  });

  beforeEach(() => {
  });

  it('should create correctly', () => {
    const testPoke = new Pokemon("Bulbizarre",1,PokeType.Plante,PokeType.Poison,"test_url",2,0);
    expect(testPoke).toBeTruthy();
    expect(testPoke.name).toBe("Bulbizarre");
  });
});
