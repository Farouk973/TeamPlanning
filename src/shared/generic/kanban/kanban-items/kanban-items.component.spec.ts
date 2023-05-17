import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KanbanItemsComponent } from './kanban-items.component';

describe('KanbanItemsComponent', () => {
  let component: KanbanItemsComponent;
  let fixture: ComponentFixture<KanbanItemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KanbanItemsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KanbanItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
