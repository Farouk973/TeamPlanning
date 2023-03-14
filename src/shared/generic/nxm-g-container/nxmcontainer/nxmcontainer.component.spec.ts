import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NXMContainerComponent } from './nxmcontainer.component';

describe('NXMContainerComponent', () => {
  let component: NXMContainerComponent;
  let fixture: ComponentFixture<NXMContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NXMContainerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NXMContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
