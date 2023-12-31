import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageEditTodoComponent } from './pages/page-edit-todo/page-edit-todo.component';
import { PageListTodoComponent } from './pages/page-list-todo/page-list-todo.component';

const routes: Routes = [
  { path: '', component: PageListTodoComponent },
  { path: 'edit/:id', component: PageEditTodoComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TodosRoutingModule {}
