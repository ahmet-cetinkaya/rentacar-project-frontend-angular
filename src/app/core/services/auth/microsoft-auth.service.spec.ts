import { TestBed } from '@angular/core/testing';

import { MicrosoftAuthService } from './microsoft-auth.service';

describe('MicrosoftAuthService', () => {
  let service: MicrosoftAuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MicrosoftAuthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
