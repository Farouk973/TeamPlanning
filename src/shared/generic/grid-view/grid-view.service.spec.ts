import { TestBed } from '@angular/core/testing';

import { GridviewService } from './grid-view.service';

describe('GridviewService', () => {
  let service: GridviewService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GridviewService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
