import { TestBed } from '@angular/core/testing';

import { CarsResolver } from './cars.resolver';

describe('CarsResolver', () => {
  let resolver: CarsResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(CarsResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
