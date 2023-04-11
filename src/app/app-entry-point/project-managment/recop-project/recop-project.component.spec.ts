import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecopProjectComponent } from './recop-project.component';

describe('RecopProjectComponent', () => {
  let component: RecopProjectComponent;
  let fixture: ComponentFixture<RecopProjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecopProjectComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecopProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
