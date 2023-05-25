import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScheduligTasksComponent } from './schedulig-tasks.component';

describe('ScheduligTasksComponent', () => {
  let component: ScheduligTasksComponent;
  let fixture: ComponentFixture<ScheduligTasksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScheduligTasksComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScheduligTasksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
