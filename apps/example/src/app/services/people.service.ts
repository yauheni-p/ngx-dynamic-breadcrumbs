import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { Person } from '../components/person/person';
import { PersonListItem } from '../components/people/person-list-item';

@Injectable()
export class PeopleService {

  private readonly data: Person[] = [
    {
      firstName: 'Leigh',
      lastName: 'Bevan',
      id: 1,
      sex: 'Male',
      year: 1987
    },
    {
      firstName: 'Aine',
      lastName: 'Betts',
      id: 2,
      sex: 'Male',
      year: 1987
    },
    {
      firstName: 'Fay',
      lastName: 'Connolly',
      id: 3,
      sex: 'Male',
      year: 1987
    },
    {
      firstName: 'Zohaib',
      lastName: 'Wagner',
      id: 4,
      sex: 'Male',
      year: 1987
    },
    {
      firstName: 'Zaine',
      lastName: 'Logan',
      id: 5,
      sex: 'Male',
      year: 1987
    },
    {
      firstName: 'Tatiana',
      lastName: 'Mann',
      id: 6,
      sex: 'Male',
      year: 1987
    },

    {
      firstName: 'Dawood',
      lastName: 'Schroeder',
      id: 7,
      sex: 'Male',
      year: 1987
    },
    {
      firstName: 'Luca',
      lastName: 'Reeves',
      id: 8,
      sex: 'Male',
      year: 1987
    }
  ];

  getPerson(id: number): Observable<Person> {
    return of(this.data.find(x => x.id === id));
  }

  getPeople(): Observable<PersonListItem[]> {
    return of(this.data).pipe(map((people: Person[]) => people.map(x => ({
      id: x.id, lastName: x.lastName,
      firstName: x.firstName
    }))));
  }
}

