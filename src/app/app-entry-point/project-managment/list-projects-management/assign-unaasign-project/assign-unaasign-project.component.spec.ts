import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignUnaasignProjectComponent } from './assign-unaasign-project.component';

describe('AssignUnaasignProjectComponent', () => {
  let component: AssignUnaasignProjectComponent;
  let fixture: ComponentFixture<AssignUnaasignProjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssignUnaasignProjectComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AssignUnaasignProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
