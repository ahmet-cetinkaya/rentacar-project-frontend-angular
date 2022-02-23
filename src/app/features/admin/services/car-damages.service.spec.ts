import { TestBed } from '@angular/core/testing';
import { CarDamagesService } from './car-damages.service';

describe('CarDamagesService', () => {
  let service: CarDamagesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CarDamagesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
