import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Todo } from 'src/app/core/models/todo';
import { TodosService } from '../../services/todos.service';
import { Router } from '@angular/router';
import { StateTodo } from 'src/app/core/enums/state-todo';

@Component({
  selector: 'app-page-list-todo',
  templateUrl: './page-list-todo.component.html',
  styleUrls: ['./page-list-todo.component.scss'],
})
export class PageListTodoComponent {
  public tab!: Todo[];
  public init: Todo = new Todo();
  public state: StateTodo = StateTodo.TERMINE;
  newTask: string = '';
  isChecked: boolean = false;

  constructor(private todosService: TodosService, private router: Router) {
    this.todosService.getData().subscribe((data) => {
      this.tab = data;
    });
  }

  public add(obj: Todo) {
    this.todosService.postData(obj).subscribe((reponse) => {
      console.log('Tache ajoutée');
      this.tab.push(reponse);
    });
  }

  public changeState(obj: Todo, event: Event) {
    const target = event.target as HTMLInputElement;
    const newState = target.checked ? StateTodo.TERMINE : StateTodo.EN_COURS;
    this.todosService.changeState(obj, newState).subscribe((data) => {
      Object.assign(obj, data);
    });
  }

  public goToEdit(todo: Todo) {
    this.router.navigate(['todos', 'edit', todo.id]);
  }
}
