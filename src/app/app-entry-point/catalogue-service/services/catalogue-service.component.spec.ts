import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatalogueServiceComponent } from './catalogue-service.component';

describe('CatalogueServiceComponent', () => {
  let component: CatalogueServiceComponent;
  let fixture: ComponentFixture<CatalogueServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CatalogueServiceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CatalogueServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
