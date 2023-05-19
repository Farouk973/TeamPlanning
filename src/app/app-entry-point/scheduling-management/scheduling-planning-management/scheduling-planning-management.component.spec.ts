import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SchedulingPlanningManagementComponent } from './scheduling-planning-management.component';

describe('SchedulingPlanningManagementComponent', () => {
  let component: SchedulingPlanningManagementComponent;
  let fixture: ComponentFixture<SchedulingPlanningManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SchedulingPlanningManagementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SchedulingPlanningManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
