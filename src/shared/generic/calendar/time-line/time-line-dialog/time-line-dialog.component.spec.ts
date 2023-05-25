import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeLineDialogComponent } from './time-line-dialog.component';

describe('TimeLineDialogComponent', () => {
  let component: TimeLineDialogComponent;
  let fixture: ComponentFixture<TimeLineDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TimeLineDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TimeLineDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
