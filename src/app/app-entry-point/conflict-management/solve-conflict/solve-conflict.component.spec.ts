import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolveConflictComponent } from './solve-conflict.component';

describe('SolveConflictComponent', () => {
  let component: SolveConflictComponent;
  let fixture: ComponentFixture<SolveConflictComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SolveConflictComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SolveConflictComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
