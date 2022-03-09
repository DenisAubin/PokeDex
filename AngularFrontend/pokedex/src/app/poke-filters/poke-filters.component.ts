import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'poke-filters',
  templateUrl: './poke-filters.component.html',
  styleUrls: ['./poke-filters.component.scss'],
})
export class PokeFiltersComponent implements OnInit {
  filter = {
    name: '',
    type: '',
  };
  nameControl = new FormControl('');

  @Output()
  filterEvent = new EventEmitter<any>();

  constructor() {}

  ngOnInit(): void {}

  updateFilter() {
    this.filter.name = this.nameControl.value.toLowerCase();
    this.filterEvent.emit(this.filter);
  }
}
