import { TestBed } from '@angular/core/testing';

import { WoodProductsService } from './wood-products.service';

describe('WoodProductsService', () => {
  let service: WoodProductsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WoodProductsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
