import { Injectable } from '@angular/core';
import {
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { PersonListItem } from '../components/people/person-list-item';
import { BreadcrumbsService } from 'ngx-dynamic-breadcrumbs';
import { tap } from 'rxjs/operators';
import { PeopleService } from '../services/people.service';

@Injectable()
export class PeopleResolver implements Resolve<PersonListItem[]> {
  constructor(private service: PeopleService, private bc: BreadcrumbsService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<PersonListItem[]> {
    return this.service.getPeople().pipe(tap(_ => {
      this.bc.set([{
        path: 'people',
        breadcrumb: 'People'
      }]);
    }));
  }
}
