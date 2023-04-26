import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StepperSkillDialogComponent } from './stepper-skill-dialog.component';

describe('StepperSkillDialogComponent', () => {
  let component: StepperSkillDialogComponent;
  let fixture: ComponentFixture<StepperSkillDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StepperSkillDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StepperSkillDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
