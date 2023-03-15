import { TestBed } from '@angular/core/testing';

import { CardDialogService } from './card.dialog.service';

describe('CardDialogService', () => {
  let service: CardDialogService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CardDialogService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
