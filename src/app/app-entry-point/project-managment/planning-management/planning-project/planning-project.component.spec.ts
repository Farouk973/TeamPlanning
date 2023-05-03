import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanningProjectComponent } from './planning-project.component';

describe('PlanningProjectComponent', () => {
  let component: PlanningProjectComponent;
  let fixture: ComponentFixture<PlanningProjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlanningProjectComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlanningProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
