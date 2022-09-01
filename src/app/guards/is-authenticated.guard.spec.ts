import { TestBed } from '@angular/core/testing';

import { IsAuthenticatedGuard } from './is-authenticated.guard';

describe('IsAuthenticatedGuard', () => {
  let guard: IsAuthenticatedGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(IsAuthenticatedGuard);
  });
});
