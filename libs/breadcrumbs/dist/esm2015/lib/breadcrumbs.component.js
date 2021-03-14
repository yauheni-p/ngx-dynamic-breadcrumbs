import { Component, Inject, InjectionToken, Input, Optional } from '@angular/core';
import { BreadcrumbsService } from './breadcrumbs.service';
import { DefaultDividerComponent } from './default-divider/default-divider.component';
export const BREADCRUMBS_DEFAULT_OPTIONS = new InjectionToken('BREADCRUMBS_DEFAULT_OPTIONS');
export class BreadcrumbsComponent {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnJlYWRjcnVtYnMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2xpYi9icmVhZGNydW1icy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsY0FBYyxFQUFFLEtBQUssRUFBRSxRQUFRLEVBQVEsTUFBTSxlQUFlLENBQUM7QUFHekYsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDM0QsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sNkNBQTZDLENBQUM7QUFNdEYsTUFBTSxDQUFDLE1BQU0sMkJBQTJCLEdBQ3BDLElBQUksY0FBYyxDQUE0Qiw2QkFBNkIsQ0FBQyxDQUFDO0FBT2pGLE1BQU0sT0FBTyxvQkFBb0I7SUFNL0IsWUFDVSxPQUEyQixFQUNjLFFBQW9DO1FBRDdFLFlBQU8sR0FBUCxPQUFPLENBQW9CO1FBTHJDLHFCQUFnQixHQUFjLHVCQUF1QixDQUFDO1FBRXRELGVBQVUsR0FBa0MsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLEVBQUUsQ0FBQztRQU03RCxJQUFJLFFBQVEsSUFBSSxRQUFRLENBQUMsZ0JBQWdCLEVBQUU7WUFDekMsSUFBSSxDQUFDLGdCQUFnQixHQUFHLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQztTQUNuRDtJQUNILENBQUM7OztZQWxCRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLHVCQUF1QjtnQkFDakMsdWhCQUEyQzs7YUFFNUM7OztZQWRRLGtCQUFrQjs0Q0F1QnRCLFFBQVEsWUFBSSxNQUFNLFNBQUMsMkJBQTJCOzs7K0JBUGhELEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEluamVjdCwgSW5qZWN0aW9uVG9rZW4sIElucHV0LCBPcHRpb25hbCwgVHlwZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IEJyZWFkY3J1bWIgfSBmcm9tICcuL2JyZWFkY3J1bWInO1xyXG5pbXBvcnQgeyBCcmVhZGNydW1ic1NlcnZpY2UgfSBmcm9tICcuL2JyZWFkY3J1bWJzLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBEZWZhdWx0RGl2aWRlckNvbXBvbmVudCB9IGZyb20gJy4vZGVmYXVsdC1kaXZpZGVyL2RlZmF1bHQtZGl2aWRlci5jb21wb25lbnQnO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBCcmVhZGNydW1ic0RlZmF1bHRPcHRpb25zIHtcclxuICBkaXZpZGVyQ29tcG9uZW50OiBUeXBlPGFueT47XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBCUkVBRENSVU1CU19ERUZBVUxUX09QVElPTlNcclxuICA9IG5ldyBJbmplY3Rpb25Ub2tlbjxCcmVhZGNydW1ic0RlZmF1bHRPcHRpb25zPignQlJFQURDUlVNQlNfREVGQVVMVF9PUFRJT05TJyk7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2JyZWFkY3J1bWJzLWNvbnRhaW5lcicsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2JyZWFkY3J1bWJzLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9icmVhZGNydW1icy5jb21wb25lbnQuc2NzcyddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBCcmVhZGNydW1ic0NvbXBvbmVudCB7XHJcbiAgQElucHV0KClcclxuICBkaXZpZGVyQ29tcG9uZW50OiBUeXBlPGFueT4gPSBEZWZhdWx0RGl2aWRlckNvbXBvbmVudDtcclxuXHJcbiAgbWVudUl0ZW1zJDogT2JzZXJ2YWJsZTxBcnJheTxCcmVhZGNydW1iPj4gPSB0aGlzLnNlcnZpY2UuZ2V0KCk7XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHJpdmF0ZSBzZXJ2aWNlOiBCcmVhZGNydW1ic1NlcnZpY2UsXHJcbiAgICBAT3B0aW9uYWwoKSBASW5qZWN0KEJSRUFEQ1JVTUJTX0RFRkFVTFRfT1BUSU9OUykgZGVmYXVsdHM/OiBCcmVhZGNydW1ic0RlZmF1bHRPcHRpb25zXHJcbiAgKSB7XHJcbiAgICBpZiAoZGVmYXVsdHMgJiYgZGVmYXVsdHMuZGl2aWRlckNvbXBvbmVudCkge1xyXG4gICAgICB0aGlzLmRpdmlkZXJDb21wb25lbnQgPSBkZWZhdWx0cy5kaXZpZGVyQ29tcG9uZW50O1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0=