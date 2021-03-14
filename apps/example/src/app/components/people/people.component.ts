import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { PeopleService } from '../../services/people.service';
import { Observable } from 'rxjs';
import { PersonListItem } from './person-list-item';
import { ActivatedRoute, Data } from '@angular/router';
import { map } from 'rxjs/operators';

@Component({
  selector: 'breadcrumbs-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PeopleComponent {
  people$: Observable<PersonListItem[]> = this.route.data.pipe(map((data: Data) => data.people));

  constructor(private route: ActivatedRoute) {
  }
}
