import { TestBed, inject } from '@angular/core/testing';

import { SalesData3Service } from './sales-data3.service';

describe('SalesData3Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SalesData3Service]
    });
  });

  it('should be created', inject([SalesData3Service], (service: SalesData3Service) => {
    expect(service).toBeTruthy();
  }));
});
