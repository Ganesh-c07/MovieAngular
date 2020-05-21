import { TestBed } from '@angular/core/testing';

import { Admin } from './admin';

describe('Admin', () => {
  let guard: Admin;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(Admin);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
