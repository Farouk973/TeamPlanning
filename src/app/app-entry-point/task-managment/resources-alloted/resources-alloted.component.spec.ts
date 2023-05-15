import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResourcesAllotedComponent } from './resources-alloted.component';

describe('ResourcesAllotedComponent', () => {
  let component: ResourcesAllotedComponent;
  let fixture: ComponentFixture<ResourcesAllotedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResourcesAllotedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResourcesAllotedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
