import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestCalanderComponent } from './request-calander.component';

describe('RequestCalanderComponent', () => {
  let component: RequestCalanderComponent;
  let fixture: ComponentFixture<RequestCalanderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RequestCalanderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RequestCalanderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
