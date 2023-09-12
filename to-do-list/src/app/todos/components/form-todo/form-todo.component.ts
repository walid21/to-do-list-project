import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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

  @Input() objTodo!: Todo;
  @Output() formData = new EventEmitter();

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.form = this.fb.group({
      title: [
        this.objTodo.title,
        [Validators.required, Validators.minLength(5), Validators.maxLength(50)],
      ],
      id: [this.objTodo.id],
      stateTodo: [this.objTodo.stateTodo],
    });
  }

  public onSubmit() {
    this.formData.emit(this.form.value);
  }
}
