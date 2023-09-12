import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompteurTodosComponent } from './compteur-todos.component';

describe('CompteurTodosComponent', () => {
  let component: CompteurTodosComponent;
  let fixture: ComponentFixture<CompteurTodosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CompteurTodosComponent]
    });
    fixture = TestBed.createComponent(CompteurTodosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
