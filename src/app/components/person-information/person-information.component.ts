import { Component, OnInit } from '@angular/core';
import { PeopleService } from 'src/app/services/people.service';

@Component({
  selector: 'app-person-information',
  templateUrl: './person-information.component.html',
  styleUrls: ['./person-information.component.scss'],
})
export class PersonInformationComponent implements OnInit {
  person: any;
  constructor(private people: PeopleService) {}

  ngOnInit(): void {
    this.people.getSelectedPerson().subscribe((person) => {
      console.log(`View person: ${person}`);
      this.person = person;
    });
  }
}
