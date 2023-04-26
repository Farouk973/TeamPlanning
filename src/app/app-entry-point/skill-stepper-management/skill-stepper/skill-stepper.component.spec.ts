import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillStepperComponent } from './skill-stepper.component';

describe('SkillStepperComponent', () => {
  let component: SkillStepperComponent;
  let fixture: ComponentFixture<SkillStepperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SkillStepperComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SkillStepperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
