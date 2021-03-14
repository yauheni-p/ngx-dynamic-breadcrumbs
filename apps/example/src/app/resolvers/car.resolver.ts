import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { Car } from '../components/car/car';
import { CarsService } from '../services/cars.service';
import { BreadcrumbsService } from '@breadcrumbs/breadcrumbs';
import { tap } from 'rxjs/operators';

@Injectable()
export class CarResolver implements Resolve<Car> {
  constructor(private service: CarsService, private bc: BreadcrumbsService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Car> {
    return this.service.getCar(parseInt(route.params.id, 10)).pipe(tap(car => {
      this.bc.set([
        {
          breadcrumb: 'Cars',
          path: `cars`
        },
        {
          breadcrumb: `${car.brand} ${car.model}`,
          path: `cars/${car.id}`
        }
      ]);
    }));
  }
}
