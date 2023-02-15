import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
  searchterm = '';
  @Output() search = new EventEmitter<any>();

  constructor() {}
  ngOnInit(): void {}

  doSearch() {
    this.search.emit(this.searchterm);
  }
}
