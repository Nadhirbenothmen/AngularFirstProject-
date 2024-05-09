import { TestBed } from '@angular/core/testing';

import { ConsumerProductService } from './consumer-product.service';

describe('ConsumerProductService', () => {
  let service: ConsumerProductService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConsumerProductService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
