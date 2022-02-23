import { TestBed } from '@angular/core/testing';
import { TransmissionService } from './transmission.service';

describe('TransmissionService', () => {
  let service: TransmissionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TransmissionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
