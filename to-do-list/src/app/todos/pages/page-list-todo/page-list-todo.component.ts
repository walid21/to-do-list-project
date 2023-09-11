import { Component } from '@angular/core';
import { Todo } from 'src/app/core/models/todo';
import { TodosService } from '../../services/todos.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page-list-todo',
  templateUrl: './page-list-todo.component.html',
  styleUrls: ['./page-list-todo.component.scss'],
})
export class PageListTodoComponent {
  public tab!: Todo[];

  constructor(private todosService: TodosService, private router: Router) {
    this.todosService.getData().subscribe((data) => {
      this.tab = data;
      console.log(this.tab);
    });
  }
}
