import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { CarListItem } from '../components/cars/car-list-item';
import { CarsService } from '../services/cars.service';
import { BreadcrumbsService } from '@breadcrumbs/breadcrumbs';
import { tap } from 'rxjs/operators';

@Injectable()
export class CarsResolver implements Resolve<CarListItem[]> {
  constructor(private service: CarsService, private bc: BreadcrumbsService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<CarListItem[]> {
    return this.service.getCars().pipe(tap(_ => {
      this.bc.set([{
        path: 'cars',
        breadcrumb: 'Cars'
      }]);
    }));
  }
}
