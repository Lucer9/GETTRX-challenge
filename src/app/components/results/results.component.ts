import { Component, Input, OnInit } from '@angular/core';
import { PeopleService } from 'src/app/services/people.service';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss'],
})
export class ResultsComponent implements OnInit {
  @Input() loading: any = false;
  @Input() results: any = [];
  @Input() error: any = '';
  selectedPerson: any = {};

  constructor(private people: PeopleService) {}
  ngOnInit(): void {}

  setSelectedPerson(person: any) {
    this.selectedPerson = person;
    console.log(person, this.selectedPerson);
  }

  viewSelectedPerson() {
    this.people.setSelectedPerson(this.selectedPerson);
  }
}
