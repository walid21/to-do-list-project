import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageListTodoComponent } from './page-list-todo.component';

describe('PageListTodoComponent', () => {
  let component: PageListTodoComponent;
  let fixture: ComponentFixture<PageListTodoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PageListTodoComponent]
    });
    fixture = TestBed.createComponent(PageListTodoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
