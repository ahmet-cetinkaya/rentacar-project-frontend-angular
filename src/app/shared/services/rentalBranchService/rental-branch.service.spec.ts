import { TestBed } from '@angular/core/testing';
import { RentalBranchService } from './rental-branch.service';

describe('RentalBranchService', () => {
  let service: RentalBranchService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RentalBranchService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
