import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StepperProjectComponent } from './stepper-project.component';

describe('StepperProjectComponent', () => {
  let component: StepperProjectComponent;
  let fixture: ComponentFixture<StepperProjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StepperProjectComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StepperProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
