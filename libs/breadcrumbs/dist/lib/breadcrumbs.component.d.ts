import { InjectionToken, Type } from '@angular/core';
import { Observable } from 'rxjs';
import { Breadcrumb } from './breadcrumb';
import { BreadcrumbsService } from './breadcrumbs.service';
export interface BreadcrumbsDefaultOptions {
    dividerComponent: Type<any>;
}
export declare const BREADCRUMBS_DEFAULT_OPTIONS: InjectionToken<BreadcrumbsDefaultOptions>;
export declare class BreadcrumbsComponent {
    private service;
    dividerComponent: Type<any>;
    menuItems$: Observable<Array<Breadcrumb>>;
    constructor(service: BreadcrumbsService, defaults?: BreadcrumbsDefaultOptions);
}
