import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConflictTimelineComponent } from './conflict-timeline.component';

describe('ConflictTimelineComponent', () => {
  let component: ConflictTimelineComponent;
  let fixture: ComponentFixture<ConflictTimelineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConflictTimelineComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConflictTimelineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
