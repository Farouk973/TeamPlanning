import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActionCatalogueComponent } from './action-catalogue.component';

describe('ActionCatalogueComponent', () => {
  let component: ActionCatalogueComponent;
  let fixture: ComponentFixture<ActionCatalogueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActionCatalogueComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActionCatalogueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
