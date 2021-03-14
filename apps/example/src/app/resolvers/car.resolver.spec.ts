import { TestBed } from '@angular/core/testing';

import { CarResolver } from './car.resolver';

describe('CarResolver', () => {
  let resolver: CarResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(CarResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
