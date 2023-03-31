import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchBarCgComponent } from './search-bar-cg.component';

describe('SearchBarCgComponent', () => {
  let component: SearchBarCgComponent;
  let fixture: ComponentFixture<SearchBarCgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchBarCgComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchBarCgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
