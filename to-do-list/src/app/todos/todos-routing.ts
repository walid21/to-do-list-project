import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageEditTodoComponent } from './pages/page-edit-todo/page-edit-todo.component';

const routes: Routes = [{ path: 'edit/:id', component: PageEditTodoComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TodosRoutingModule {}
