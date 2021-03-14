import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Breadcrumb } from './breadcrumb';

@Injectable({
  providedIn: 'root',
})
export class BreadcrumbsService {
  private breadcrumbs: BehaviorSubject<Array<Breadcrumb>> = new BehaviorSubject(
    null
  );

  get(): Observable<Array<Breadcrumb>> {
    return this.breadcrumbs.asObservable();
  }

  set(breadcrumbs: Array<Breadcrumb>): void {
    this.breadcrumbs.next(breadcrumbs);
  }

  clear(): void {
    this.breadcrumbs.next(null);
  }
}
