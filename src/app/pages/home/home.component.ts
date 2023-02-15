import { Component, OnInit } from '@angular/core';
import { map, Observable, of } from 'rxjs';
import { PeopleService } from 'src/app/services/people.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  error: any;
  loading: boolean = false;
  results: Observable<any> = of({ results: [] });

  constructor(private people: PeopleService) {}
  ngOnInit(): void {}
  searchFor(term: string) {
    console.log(`-- Searching for... ${term ? term : 'All'} --`);
    this.results = this.people.searchFor(term);
  }
}
