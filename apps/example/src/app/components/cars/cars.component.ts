import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute, Data } from '@angular/router';
import { Observable } from 'rxjs';
import { CarListItem } from './car-list-item';
import { map } from 'rxjs/operators';

@Component({
  selector: 'breadcrumbs-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CarsComponent {
  cars$: Observable<CarListItem[]> = this.route.data.pipe(map((data: Data) => data.cars));
  constructor(private route: ActivatedRoute) { }
}
