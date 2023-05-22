import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalandarDetailsComponent } from './calandar-details.component';

describe('CalandarDetailsComponent', () => {
  let component: CalandarDetailsComponent;
  let fixture: ComponentFixture<CalandarDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalandarDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CalandarDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
