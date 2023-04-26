import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpreadsheetsProjectComponent } from './spreadsheets-project.component';

describe('SpreadsheetsProjectComponent', () => {
  let component: SpreadsheetsProjectComponent;
  let fixture: ComponentFixture<SpreadsheetsProjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpreadsheetsProjectComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpreadsheetsProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
