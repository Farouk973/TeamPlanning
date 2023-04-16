import { TestBed } from '@angular/core/testing';

import { CustomCellStateService } from './custom-cell-state.service';

describe('CustomCellStateService', () => {
  let service: CustomCellStateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CustomCellStateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
