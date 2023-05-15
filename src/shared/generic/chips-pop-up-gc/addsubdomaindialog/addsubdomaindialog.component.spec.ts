import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddsubdomaindialogComponent } from './addsubdomaindialog.component';

describe('AddsubdomaindialogComponent', () => {
  let component: AddsubdomaindialogComponent;
  let fixture: ComponentFixture<AddsubdomaindialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddsubdomaindialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddsubdomaindialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
