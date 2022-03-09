import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokeFiltersComponent } from './poke-filters.component';

describe('PokeFiltersComponent', () => {
  let component: PokeFiltersComponent;
  let fixture: ComponentFixture<PokeFiltersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PokeFiltersComponent ]
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
