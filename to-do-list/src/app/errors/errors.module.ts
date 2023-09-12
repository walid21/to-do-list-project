import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ErrorsRoutingModule } from './errors-routing.module';
import { TodosModule } from '../todos/todos.module';



@NgModule({
  declarations: [
    PageNotFoundComponent
  ],
  imports: [
    CommonModule,
    ErrorsRoutingModule,
    TodosModule
  ]
})
export class ErrorsModule { }
