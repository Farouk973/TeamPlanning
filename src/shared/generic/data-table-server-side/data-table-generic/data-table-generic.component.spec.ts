import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataTableGenericComponent } from './data-table-generic.component';

describe('DataTableGenericComponent', () => {
  let component: DataTableGenericComponent;
  let fixture: ComponentFixture<DataTableGenericComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DataTableGenericComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DataTableGenericComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
