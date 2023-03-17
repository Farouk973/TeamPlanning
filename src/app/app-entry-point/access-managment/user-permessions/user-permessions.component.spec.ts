import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserPermessionsComponent } from './user-permessions.component';

describe('UserPermessionsComponent', () => {
  let component: UserPermessionsComponent;
  let fixture: ComponentFixture<UserPermessionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserPermessionsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserPermessionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
