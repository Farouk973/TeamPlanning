import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditDeleteCatalogueComponent } from './edit-delete-catalogue.component';

describe('EditDeleteCatalogueComponent', () => {
  let component: EditDeleteCatalogueComponent;
  let fixture: ComponentFixture<EditDeleteCatalogueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditDeleteCatalogueComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditDeleteCatalogueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
