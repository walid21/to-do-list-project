import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TodosService } from '../../services/todos.service';
import { Todo } from 'src/app/core/models/todo';

@Component({
  selector: 'app-page-edit-todo',
  templateUrl: './page-edit-todo.component.html',
  styleUrls: ['./page-edit-todo.component.scss'],
})
export class PageEditTodoComponent {
  public editTodo!: Todo;

  constructor(
    private todosService: TodosService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {
    const id = Number(this.activatedRoute.snapshot.paramMap.get('id'));
    if (id) {
      this.todosService
        .getOrderById(id)
        .subscribe((data) => (this.editTodo = data));
    }
  }
}
