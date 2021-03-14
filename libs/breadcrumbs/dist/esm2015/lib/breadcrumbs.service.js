import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import * as i0 from "@angular/core";
export class BreadcrumbsService {
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
BreadcrumbsService.ɵprov = i0.ɵɵdefineInjectable({ factory: function BreadcrumbsService_Factory() { return new BreadcrumbsService(); }, token: BreadcrumbsService, providedIn: "root" });
BreadcrumbsService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnJlYWRjcnVtYnMuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9saWIvYnJlYWRjcnVtYnMuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxlQUFlLEVBQWMsTUFBTSxNQUFNLENBQUM7O0FBTW5ELE1BQU0sT0FBTyxrQkFBa0I7SUFIL0I7UUFJVSxnQkFBVyxHQUF1QyxJQUFJLGVBQWUsQ0FDM0UsSUFBSSxDQUNMLENBQUM7S0FhSDtJQVhDLEdBQUc7UUFDRCxPQUFPLElBQUksQ0FBQyxXQUFXLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDekMsQ0FBQztJQUVELEdBQUcsQ0FBQyxXQUE4QjtRQUNoQyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUNyQyxDQUFDO0lBRUQsS0FBSztRQUNILElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzlCLENBQUM7Ozs7WUFsQkYsVUFBVSxTQUFDO2dCQUNWLFVBQVUsRUFBRSxNQUFNO2FBQ25CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBCZWhhdmlvclN1YmplY3QsIE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgQnJlYWRjcnVtYiB9IGZyb20gJy4vYnJlYWRjcnVtYic7XHJcblxyXG5ASW5qZWN0YWJsZSh7XHJcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgQnJlYWRjcnVtYnNTZXJ2aWNlIHtcclxuICBwcml2YXRlIGJyZWFkY3J1bWJzOiBCZWhhdmlvclN1YmplY3Q8QXJyYXk8QnJlYWRjcnVtYj4+ID0gbmV3IEJlaGF2aW9yU3ViamVjdChcclxuICAgIG51bGxcclxuICApO1xyXG5cclxuICBnZXQoKTogT2JzZXJ2YWJsZTxBcnJheTxCcmVhZGNydW1iPj4ge1xyXG4gICAgcmV0dXJuIHRoaXMuYnJlYWRjcnVtYnMuYXNPYnNlcnZhYmxlKCk7XHJcbiAgfVxyXG5cclxuICBzZXQoYnJlYWRjcnVtYnM6IEFycmF5PEJyZWFkY3J1bWI+KTogdm9pZCB7XHJcbiAgICB0aGlzLmJyZWFkY3J1bWJzLm5leHQoYnJlYWRjcnVtYnMpO1xyXG4gIH1cclxuXHJcbiAgY2xlYXIoKTogdm9pZCB7XHJcbiAgICB0aGlzLmJyZWFkY3J1bWJzLm5leHQobnVsbCk7XHJcbiAgfVxyXG59XHJcbiJdfQ==