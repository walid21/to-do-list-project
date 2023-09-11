import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageEditTodoComponent } from './page-edit-todo.component';

describe('PageEditTodoComponent', () => {
  let component: PageEditTodoComponent;
  let fixture: ComponentFixture<PageEditTodoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PageEditTodoComponent]
    });
    fixture = TestBed.createComponent(PageEditTodoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
