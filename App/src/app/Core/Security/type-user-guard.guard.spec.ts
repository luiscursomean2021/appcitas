import { TestBed } from '@angular/core/testing';

import { TypeUserGuardGuard } from './type-user-guard.guard';

describe('TypeUserGuardGuard', () => {
  let guard: TypeUserGuardGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(TypeUserGuardGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
