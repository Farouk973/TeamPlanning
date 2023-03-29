import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicAutoCompleteComponent } from './dynamic-auto-complete.component';

describe('DynamicAutoCompleteComponent', () => {
  let component: DynamicAutoCompleteComponent;
  let fixture: ComponentFixture<DynamicAutoCompleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DynamicAutoCompleteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DynamicAutoCompleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
