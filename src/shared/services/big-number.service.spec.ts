import { TestBed } from '@angular/core/testing';

import { BigNumberService } from './big-number.service';

describe('BigNumberService', () => {
  let service: BigNumberService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BigNumberService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
