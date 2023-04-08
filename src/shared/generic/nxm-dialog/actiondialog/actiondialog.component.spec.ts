import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActiondialogComponent } from './actiondialog.component';

describe('ActiondialogComponent', () => {
  let component: ActiondialogComponent;
  let fixture: ComponentFixture<ActiondialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActiondialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActiondialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
