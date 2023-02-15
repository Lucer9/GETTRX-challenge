import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PeopleService {
  private endpoint = 'https://swapi.dev/api/people';
  constructor(private http: HttpClient) {}

  private selectedPerson = new Subject<any>();
  private selectedPerson$ = this.selectedPerson.asObservable(); //Has a $

  public setSelectedPerson(person: any) {
    this.selectedPerson.next(person);
  }
  public getSelectedPerson() : Observable<object> {
    return this.selectedPerson$;
  }

  searchFor(term: any) {
    return this.http.get(`${this.endpoint}?search=${term}`);
  }
}
