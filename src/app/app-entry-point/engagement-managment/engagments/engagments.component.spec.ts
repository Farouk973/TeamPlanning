import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EngagmentsComponent } from './engagments.component';

describe('EngagmentsComponent', () => {
  let component: EngagmentsComponent;
  let fixture: ComponentFixture<EngagmentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EngagmentsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EngagmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
