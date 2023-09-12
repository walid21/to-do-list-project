import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageEditTodoComponent } from './pages/page-edit-todo/page-edit-todo.component';
import { TodosRoutingModule } from './todos-routing';
import { PageListTodoComponent } from './pages/page-list-todo/page-list-todo.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormTodoComponent } from './components/form-todo/form-todo.component';

@NgModule({
  declarations: [
    PageEditTodoComponent,
    PageListTodoComponent,
    FormTodoComponent,
  ],
  imports: [CommonModule, TodosRoutingModule, ReactiveFormsModule],
})
export class TodosModule {}
