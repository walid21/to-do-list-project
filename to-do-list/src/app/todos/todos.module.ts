import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageEditTodoComponent } from './pages/page-edit-todo/page-edit-todo.component';
import { TodosRoutingModule } from './todos-routing';
import { PageListTodoComponent } from './pages/page-list-todo/page-list-todo.component';
import { FormTodoComponent } from './components/form-todo/form-todo.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormTodowComponent } from './components/form-todow/form-todow.component';

@NgModule({
  declarations: [
    PageEditTodoComponent,
    PageListTodoComponent,
    FormTodoComponent,
    FormTodowComponent,
  ],
  imports: [CommonModule, TodosRoutingModule, ReactiveFormsModule],

})
export class TodosModule {}
