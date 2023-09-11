import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Todo } from 'src/app/core/models/todo';

@Component({
  selector: 'app-form-todow',
  templateUrl: './form-todow.component.html',
  styleUrls: ['./form-todow.component.scss'],
})
export class FormTodowComponent {
  public form!: FormGroup;
  @Input() objTodo!: Todo;
  @Output() formData = new EventEmitter();

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.form = this.fb.group({
      title: [this.objTodo.title],
      id: [this.objTodo.id],
      stateTodo: [this.objTodo.stateTodo],
    });
  }

  public onSubmit() {
    this.formData.emit(this.form.value);
  }
}
