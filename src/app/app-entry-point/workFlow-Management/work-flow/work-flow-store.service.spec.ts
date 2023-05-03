import { TestBed } from '@angular/core/testing';

import { WorkFlowStoreService } from './work-flow-store.service';

describe('WorkFlowStoreService', () => {
  let service: WorkFlowStoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WorkFlowStoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
