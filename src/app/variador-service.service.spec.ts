import { TestBed } from '@angular/core/testing';

import { VariadorServiceService } from './variador-service.service';

describe('VariadorServiceService', () => {
  let service: VariadorServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VariadorServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
