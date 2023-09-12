import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageEditTodoComponent } from './pages/page-edit-todo/page-edit-todo.component';
import { TodosRoutingModule } from './todos-routing';
import { PageListTodoComponent } from './pages/page-list-todo/page-list-todo.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CompteurTodosComponent } from './components/compteur-todos/compteur-todos.component';
import { FormTodoComponent } from './components/form-todo/form-todo.component';
import { SharedModule } from '../shared/shared.module';
import { BandeauSuperieurComponent } from './components/bandeau-superieur/bandeau-superieur.component';

@NgModule({
  declarations: [
    PageEditTodoComponent,
    PageListTodoComponent,
    FormTodoComponent,
    CompteurTodosComponent,
    BandeauSuperieurComponent,
  ],
  imports: [
    CommonModule,
    TodosRoutingModule,
    ReactiveFormsModule,
    SharedModule
  ],
  exports : [
    BandeauSuperieurComponent,
  ]
})
export class TodosModule {}
