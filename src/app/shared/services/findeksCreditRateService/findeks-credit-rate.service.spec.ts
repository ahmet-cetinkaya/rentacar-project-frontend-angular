import { TestBed } from '@angular/core/testing';
import { FindeksCreditRateService } from './findeks-credit-rate.service';

describe('FindeksCreditRateService', () => {
  let service: FindeksCreditRateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FindeksCreditRateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
