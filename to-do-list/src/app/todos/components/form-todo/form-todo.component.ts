import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { StateTodo } from 'src/app/core/enums/state-todo';
import { Todo } from 'src/app/core/models/todo';

@Component({
  selector: 'app-form-todo',
  templateUrl: './form-todo.component.html',
  styleUrls: ['./form-todo.component.scss'],
})
export class FormTodoComponent {
  public form!: FormGroup;

  public states = Object.values(StateTodo);

  @Input() todo!: Todo;

  @Output() submitted = new EventEmitter();

  public onSubmit() {
    this.submitted.emit(this.form.value);
  }

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      stateTodo: [this.todo.stateTodo],
      title: [this.todo.title],
      id: [this.todo.id],
    });
  }
}
