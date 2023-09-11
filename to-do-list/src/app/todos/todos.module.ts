import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageEditTodoComponent } from './pages/page-edit-todo/page-edit-todo.component';
import { OrdersRoutingModule } from './todos-routing';



@NgModule({
  declarations: [
    PageEditTodoComponent
  ],
  imports: [
    CommonModule,
    OrdersRoutingModule
  ]
})
export class TodosModule { }
