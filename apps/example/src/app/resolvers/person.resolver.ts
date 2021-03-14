import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { Person } from '../components/person/person';
import { BreadcrumbsService } from 'ngx-dynamic-breadcrumbs';
import { tap } from 'rxjs/operators';
import { PeopleService } from '../services/people.service';

@Injectable()
export class PersonResolver implements Resolve<Person> {
  constructor(private service: PeopleService, private bc: BreadcrumbsService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Person> {

    return this.service.getPerson(parseInt(route.params.id, 10)).pipe(tap(person => {
      this.bc.set([
        {
          breadcrumb: 'People',
          path: `people`
        },
        {
          breadcrumb: `${person.firstName} ${person.lastName}`,
          path: `people/${person.id}`
        }
      ]);
    }));
  }
}
