import { Component, EventEmitter, Output } from '@angular/core';
import { ActivatedRoute, OutletContext, Router } from '@angular/router';
import { TodosService } from '../../services/todos.service';
import { Todo } from 'src/app/core/models/todo';

@Component({
  selector: 'app-page-edit-todo',
  templateUrl: './page-edit-todo.component.html',
  styleUrls: ['./page-edit-todo.component.scss'],
})
export class PageEditTodoComponent {
  public editTodo!: Todo;
  
  @Output() notifDelete = new EventEmitter();

  public onEdit(todo: Todo) {
    this.todosService
      .update(todo)
      .subscribe(() => this.router.navigate(['orders']));
  }

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




  
  public onDelete(id: number){
    if(id){
      this.todosService.delete(id).subscribe((data) =>{
        this.router.navigate(['todos']);
      })
    }
  }
}
