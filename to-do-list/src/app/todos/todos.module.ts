import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageEditTodoComponent } from './pages/page-edit-todo/page-edit-todo.component';
import { TodosRoutingModule } from './todos-routing';
import { PageListTodoComponent } from './pages/page-list-todo/page-list-todo.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CompteurTodosComponent } from './components/compteur-todos/compteur-todos.component';
import { FormTodoComponent } from './components/form-todo/form-todo.component';

@NgModule({
  declarations: [
    PageEditTodoComponent,
    PageListTodoComponent,
    FormTodoComponent,
    CompteurTodosComponent,
  ],
  imports: [CommonModule, TodosRoutingModule, ReactiveFormsModule],
})
export class TodosModule {}
