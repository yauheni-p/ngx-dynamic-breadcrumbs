import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute, Data } from '@angular/router';
import { Observable } from 'rxjs';
import { Person } from './person';
import { map } from 'rxjs/operators';

@Component({
  selector: 'breadcrumbs-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PersonComponent  {
 person$: Observable<Person> = this.route.data.pipe(map((data: Data) => data.person));
  constructor(private route: ActivatedRoute) { }
}
