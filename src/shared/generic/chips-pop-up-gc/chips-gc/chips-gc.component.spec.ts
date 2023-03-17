import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChipsGCComponent } from './chips-gc.component';

describe('ChipsGCComponent', () => {
  let component: ChipsGCComponent;
  let fixture: ComponentFixture<ChipsGCComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChipsGCComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChipsGCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
