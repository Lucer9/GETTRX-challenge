import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { PeopleService } from 'src/app/services/people.service';

@Component({
  selector: 'app-person-information',
  templateUrl: './person-information.component.html',
  styleUrls: ['./person-information.component.scss'],
})
export class PersonInformationComponent implements OnInit {
  person = this.people.getSelectedPerson();
  constructor(private people: PeopleService) {}

  ngOnInit(): void {}
}
