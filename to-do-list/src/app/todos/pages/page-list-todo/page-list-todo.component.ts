import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Todo } from 'src/app/core/models/todo';
import { TodosService } from '../../services/todos.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-page-list-todo',
  templateUrl: './page-list-todo.component.html',
  styleUrls: ['./page-list-todo.component.scss'],
})
export class PageListTodoComponent {
  public tab!: Todo[];
  public init: Todo = new Todo();
  newTask: string = '';

  constructor(private todosService: TodosService, private router: Router) {
    this.todosService.getData().subscribe((data) => {
      this.tab = data;
    });
  }

  public add(obj: Todo) {
    this.todosService.postData(obj).subscribe((reponse) => {
      console.log('Tache ajoutée');
      this.router.navigate(['']);
    });
  }
}
