import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillRatingDialogComponent } from './skill-rating-dialog.component';

describe('SkillRatingDialogComponent', () => {
  let component: SkillRatingDialogComponent;
  let fixture: ComponentFixture<SkillRatingDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SkillRatingDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SkillRatingDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
