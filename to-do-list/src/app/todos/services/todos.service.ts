import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Todo } from 'src/app/core/models/todo';
import { StateTodo } from 'src/app/core/enums/state-todo';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TodosService {
  constructor(private http: HttpClient) {}
  configUrl = ' http://localhost:4000/todos';

  public changeState(todo: Todo, stateTodo: StateTodo): Observable<Todo> {
    const todoNew = new Todo(todo);
    todoNew.stateTodo = stateTodo;
    return this.update(todoNew);
  }

  public update(todo: Todo): Observable<Todo> {
    return this.http.put<Todo>(`${this.configUrl}/${todo.id}`, todo);
  }

  public getOrderById(id: number): Observable<Todo> {
    return this.http.get<Todo>(`${this.configUrl}/${id}`);
  }
}
