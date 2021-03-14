import { Observable } from 'rxjs';
import { Breadcrumb } from './breadcrumb';
export declare class BreadcrumbsService {
    private breadcrumbs;
    get(): Observable<Array<Breadcrumb>>;
    set(breadcrumbs: Array<Breadcrumb>): void;
    clear(): void;
}
