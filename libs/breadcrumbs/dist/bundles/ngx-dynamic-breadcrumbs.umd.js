(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common'), require('rxjs'), require('@angular/router')) :
    typeof define === 'function' && define.amd ? define('ngx-dynamic-breadcrumbs', ['exports', '@angular/core', '@angular/common', 'rxjs', '@angular/router'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global['ngx-dynamic-breadcrumbs'] = {}, global.ng.core, global.ng.common, global.rxjs, global.ng.router));
}(this, (function (exports, i0, common, rxjs, router) { 'use strict';

    var BreadcrumbsService = /** @class */ (function () {
        function BreadcrumbsService() {
            this.breadcrumbs = new rxjs.BehaviorSubject(null);
        }
        BreadcrumbsService.prototype.get = function () {
            return this.breadcrumbs.asObservable();
        };
        BreadcrumbsService.prototype.set = function (breadcrumbs) {
            this.breadcrumbs.next(breadcrumbs);
        };
        BreadcrumbsService.prototype.clear = function () {
            this.breadcrumbs.next(null);
        };
        return BreadcrumbsService;
    }());
    BreadcrumbsService.ɵprov = i0.ɵɵdefineInjectable({ factory: function BreadcrumbsService_Factory() { return new BreadcrumbsService(); }, token: BreadcrumbsService, providedIn: "root" });
    BreadcrumbsService.decorators = [
        { type: i0.Injectable, args: [{
                    providedIn: 'root',
                },] }
    ];

    var DefaultDividerComponent = /** @class */ (function () {
        function DefaultDividerComponent() {
        }
        return DefaultDividerComponent;
    }());
    DefaultDividerComponent.decorators = [
        { type: i0.Component, args: [{
                    selector: 'breadcrumbs-default-divider',
                    template: "<span class='default-divider'><svg xmlns='http://www.w3.org/2000/svg' height='12' viewBox='0 0 24 24' width='12'><path\n  d='M0 0h24v24H0z' fill='none' /><path d='M8 5v14l11-7z' /></svg></span>\n\n",
                    changeDetection: i0.ChangeDetectionStrategy.OnPush,
                    styles: [".default-divider{padding:0 5px;position:relative;bottom:-1px}"]
                },] }
    ];

    var BREADCRUMBS_DEFAULT_OPTIONS = new i0.InjectionToken('BREADCRUMBS_DEFAULT_OPTIONS');
    var BreadcrumbsComponent = /** @class */ (function () {
        function BreadcrumbsComponent(service, defaults) {
            this.service = service;
            this.dividerComponent = DefaultDividerComponent;
            this.menuItems$ = this.service.get();
            if (defaults && defaults.dividerComponent) {
                this.dividerComponent = defaults.dividerComponent;
            }
        }
        return BreadcrumbsComponent;
    }());
    BreadcrumbsComponent.decorators = [
        { type: i0.Component, args: [{
                    selector: 'breadcrumbs-container',
                    template: "<div class='breadcrumbs' *ngIf='menuItems$ | async as menuItems'>\r\n  <div class='breadcrumbs__item' *ngFor='let item of menuItems; last as isLast'>\r\n    <a\r\n      class='breadcrumbs__link'\r\n      [routerLinkActiveOptions]='{ exact: true }'\r\n      routerLinkActive='active bold'\r\n      [routerLink]='item.path'\r\n    >{{ item.breadcrumb }}</a>\r\n    <ng-container *ngIf='!isLast'>\r\n      <ng-container *ngComponentOutlet='dividerComponent'></ng-container>\r\n    </ng-container>\r\n\r\n  </div>\r\n</div>\r\n",
                    styles: [".breadcrumbs{display:flex;align-items:center}"]
                },] }
    ];
    BreadcrumbsComponent.ctorParameters = function () { return [
        { type: BreadcrumbsService },
        { type: undefined, decorators: [{ type: i0.Optional }, { type: i0.Inject, args: [BREADCRUMBS_DEFAULT_OPTIONS,] }] }
    ]; };
    BreadcrumbsComponent.propDecorators = {
        dividerComponent: [{ type: i0.Input }]
    };

    var BreadcrumbsModule = /** @class */ (function () {
        function BreadcrumbsModule() {
        }
        return BreadcrumbsModule;
    }());
    BreadcrumbsModule.decorators = [
        { type: i0.NgModule, args: [{
                    declarations: [BreadcrumbsComponent, DefaultDividerComponent],
                    imports: [common.CommonModule, router.RouterModule],
                    exports: [BreadcrumbsComponent]
                },] }
    ];

    /**
     * Generated bundle index. Do not edit.
     */

    exports.BREADCRUMBS_DEFAULT_OPTIONS = BREADCRUMBS_DEFAULT_OPTIONS;
    exports.BreadcrumbsComponent = BreadcrumbsComponent;
    exports.BreadcrumbsModule = BreadcrumbsModule;
    exports.BreadcrumbsService = BreadcrumbsService;
    exports.ɵa = DefaultDividerComponent;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=ngx-dynamic-breadcrumbs.umd.js.map
