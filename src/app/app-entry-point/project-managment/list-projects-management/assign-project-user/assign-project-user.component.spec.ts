import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignProjectUserComponent } from './assign-project-user.component';

describe('AssignProjectUserComponent', () => {
  let component: AssignProjectUserComponent;
  let fixture: ComponentFixture<AssignProjectUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssignProjectUserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AssignProjectUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
