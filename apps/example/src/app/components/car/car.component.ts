import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ActivatedRoute, Data } from '@angular/router';
import { Car } from './car';

@Component({
  selector: 'breadcrumbs-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CarComponent {
  car$: Observable<Car> = this.route.data.pipe(map((data: Data) => data.car));
  constructor(private route: ActivatedRoute) { }
}
