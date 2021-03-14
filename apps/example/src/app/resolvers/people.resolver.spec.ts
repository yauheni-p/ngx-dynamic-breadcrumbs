import { TestBed } from '@angular/core/testing';

import { PeopleResolver } from './people.resolver';

describe('PeopleResolver', () => {
  let resolver: PeopleResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(PeopleResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
