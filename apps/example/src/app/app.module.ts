import { NgModule, Type } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { Route, RouterModule } from '@angular/router';
import { BREADCRUMBS_DEFAULT_OPTIONS, BreadcrumbsDefaultOptions, BreadcrumbsModule } from '@breadcrumbs/breadcrumbs';
import { CarsComponent } from './components/cars/cars.component';
import { PeopleComponent } from './components/people/people.component';
import { CarComponent } from './components/car/car.component';
import { PersonComponent } from './components/person/person.component';
import { CarsService } from './services/cars.service';
import { PeopleService } from './services/people.service';
import { PeopleResolver } from './resolvers/people.resolver';
import { PersonResolver } from './resolvers/person.resolver';
import { CarsResolver } from './resolvers/cars.resolver';
import { CarResolver } from './resolvers/car.resolver';
import { CommonModule } from '@angular/common';
import { CustomDividerComponent } from './components/custom-divider/custom-divider.component';

const routes: Route[] = [
  {
    path: 'people',
    component: PeopleComponent,
    resolve: { people: PeopleResolver },
    pathMatch: 'full'
  },
  {
    path: 'people/:id',
    component: PersonComponent,
    resolve: { person: PersonResolver },
    pathMatch: 'full'
  },
  {
    path: 'cars',
    component: CarsComponent,
    resolve: { cars: CarsResolver },
    pathMatch: 'full'
  },
  {
    path: 'cars/:id',
    component: CarComponent,
    resolve: { car: CarResolver }
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'people'
  }
];

// const BREADCRUMBS_OPTIONS: BreadcrumbsDefaultOptions = {
//   dividerComponent: CustomDividerComponent
// };

@NgModule({
  declarations: [AppComponent, CarsComponent, PeopleComponent, CarComponent, PersonComponent, CustomDividerComponent],
  imports: [BrowserModule, RouterModule.forRoot(routes), BreadcrumbsModule, CommonModule],
  providers: [PeopleService, CarsService, CarResolver, CarsResolver, PeopleResolver, PersonResolver,
    // {
    //   provide: BREADCRUMBS_DEFAULT_OPTIONS,
    //   useValue: BREADCRUMBS_OPTIONS
    // }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
