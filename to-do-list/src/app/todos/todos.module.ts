import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageEditTodoComponent } from './pages/page-edit-todo/page-edit-todo.component';
import { OrdersRoutingModule } from './todos-routing';
import { PageListTodoComponent } from './pages/page-list-todo/page-list-todo.component';



@NgModule({
  declarations: [
    PageEditTodoComponent,
    PageListTodoComponent
  ],
  imports: [
    CommonModule,
    OrdersRoutingModule
  ]
})
export class TodosModule { }
