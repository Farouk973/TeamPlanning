import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskCalanderComponent } from './task-calander.component';

describe('TaskCalanderComponent', () => {
  let component: TaskCalanderComponent;
  let fixture: ComponentFixture<TaskCalanderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaskCalanderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TaskCalanderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
