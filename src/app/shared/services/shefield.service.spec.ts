import { TestBed } from '@angular/core/testing';

import { ShefieldService } from './shefield.service';

describe('ShefieldService', () => {
  let service: ShefieldService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShefieldService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
