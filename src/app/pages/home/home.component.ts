import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { PeopleService } from 'src/app/services/people.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  error: any;
  loading: boolean = false;
  results: any = [];

  constructor(private people: PeopleService) {}
  ngOnInit(): void {}
  searchFor(term: string) {
    this.loading = true;
    console.log(`-- Searching for... ${term} --`);
    this.people.searchFor(term).subscribe(
      (res: any) => {
        console.log(`-- GOT ${res.results}--`);
        this.loading = false;
        this.results = res.results;
      },
      (error) => {
        console.log(`-- ERROR  ${error.message}--`);
        this.loading = false;
        this.error = "There was an error, please try again";
      }
    );
  }
}
