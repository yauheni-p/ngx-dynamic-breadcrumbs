import { ɵɵdefineInjectable, Injectable, Component, ChangeDetectionStrategy, InjectionToken, Optional, Inject, Input, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BehaviorSubject } from 'rxjs';
import { RouterModule } from '@angular/router';

class BreadcrumbsService {
    constructor() {
        this.breadcrumbs = new BehaviorSubject(null);
    }
    get() {
        return this.breadcrumbs.asObservable();
    }
    set(breadcrumbs) {
        this.breadcrumbs.next(breadcrumbs);
    }
    clear() {
        this.breadcrumbs.next(null);
    }
}
BreadcrumbsService.ɵprov = ɵɵdefineInjectable({ factory: function BreadcrumbsService_Factory() { return new BreadcrumbsService(); }, token: BreadcrumbsService, providedIn: "root" });
BreadcrumbsService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
            },] }
];

class DefaultDividerComponent {
}
DefaultDividerComponent.decorators = [
    { type: Component, args: [{
                selector: 'breadcrumbs-default-divider',
                template: "<span class='default-divider'><svg xmlns='http://www.w3.org/2000/svg' height='12' viewBox='0 0 24 24' width='12'><path\n  d='M0 0h24v24H0z' fill='none' /><path d='M8 5v14l11-7z' /></svg></span>\n\n",
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: [".default-divider{padding:0 5px;position:relative;bottom:-1px}"]
            },] }
];

const BREADCRUMBS_DEFAULT_OPTIONS = new InjectionToken('BREADCRUMBS_DEFAULT_OPTIONS');
class BreadcrumbsComponent {
    constructor(service, defaults) {
        this.service = service;
        this.dividerComponent = DefaultDividerComponent;
        this.menuItems$ = this.service.get();
        if (defaults && defaults.dividerComponent) {
            this.dividerComponent = defaults.dividerComponent;
        }
    }
}
BreadcrumbsComponent.decorators = [
    { type: Component, args: [{
                selector: 'breadcrumbs-container',
                template: "<div class='breadcrumbs' *ngIf='menuItems$ | async as menuItems'>\r\n  <div class='breadcrumbs__item' *ngFor='let item of menuItems; last as isLast'>\r\n    <a\r\n      class='breadcrumbs__link'\r\n      [routerLinkActiveOptions]='{ exact: true }'\r\n      routerLinkActive='active bold'\r\n      [routerLink]='item.path'\r\n    >{{ item.breadcrumb }}</a>\r\n    <ng-container *ngIf='!isLast'>\r\n      <ng-container *ngComponentOutlet='dividerComponent'></ng-container>\r\n    </ng-container>\r\n\r\n  </div>\r\n</div>\r\n",
                styles: [".breadcrumbs{display:flex;align-items:center}"]
            },] }
];
BreadcrumbsComponent.ctorParameters = () => [
    { type: BreadcrumbsService },
    { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [BREADCRUMBS_DEFAULT_OPTIONS,] }] }
];
BreadcrumbsComponent.propDecorators = {
    dividerComponent: [{ type: Input }]
};

class BreadcrumbsModule {
}
BreadcrumbsModule.decorators = [
    { type: NgModule, args: [{
                declarations: [BreadcrumbsComponent, DefaultDividerComponent],
                imports: [CommonModule, RouterModule],
                exports: [BreadcrumbsComponent]
            },] }
];

/**
 * Generated bundle index. Do not edit.
 */

export { BREADCRUMBS_DEFAULT_OPTIONS, BreadcrumbsComponent, BreadcrumbsModule, BreadcrumbsService, DefaultDividerComponent as ɵa };
//# sourceMappingURL=ngx-dynamic-breadcrumbs.js.map
