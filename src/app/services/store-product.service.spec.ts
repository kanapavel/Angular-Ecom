import { TestBed } from '@angular/core/testing';

import { StoreProductService } from './store-product.service';

describe('StoreProductService', () => {
  let service: StoreProductService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StoreProductService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
