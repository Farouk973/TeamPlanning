import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DomainChipsGCComponent } from './domain-chips-gc.component';

describe('DomainChipsGCComponent', () => {
  let component: DomainChipsGCComponent;
  let fixture: ComponentFixture<DomainChipsGCComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DomainChipsGCComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DomainChipsGCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
