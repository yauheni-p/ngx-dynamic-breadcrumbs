import { Component, Inject, InjectionToken, Input, Optional, Type } from '@angular/core';
import { Observable } from 'rxjs';
import { Breadcrumb } from './breadcrumb';
import { BreadcrumbsService } from './breadcrumbs.service';
import { DefaultDividerComponent } from './default-divider/default-divider.component';

export interface BreadcrumbsDefaultOptions {
  dividerComponent: Type<any>;
}

export const BREADCRUMBS_DEFAULT_OPTIONS
  = new InjectionToken<BreadcrumbsDefaultOptions>('BREADCRUMBS_DEFAULT_OPTIONS');

@Component({
  selector: 'breadcrumbs-container',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.scss']
})
export class BreadcrumbsComponent {
  @Input()
  dividerComponent: Type<any> = DefaultDividerComponent;

  menuItems$: Observable<Array<Breadcrumb>> = this.service.get();

  constructor(
    private service: BreadcrumbsService,
    @Optional() @Inject(BREADCRUMBS_DEFAULT_OPTIONS) defaults?: BreadcrumbsDefaultOptions
  ) {
    if (defaults && defaults.dividerComponent) {
      this.dividerComponent = defaults.dividerComponent;
    }
  }
}
