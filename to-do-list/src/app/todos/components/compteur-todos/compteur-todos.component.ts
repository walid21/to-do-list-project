import { Component, Input } from '@angular/core';
import { Todo } from 'src/app/core/models/todo';

@Component({
  selector: 'app-compteur-todos',
  templateUrl: './compteur-todos.component.html',
  styleUrls: ['./compteur-todos.component.scss']
})
export class CompteurTodosComponent {

  @Input() tableau!: Todo[];

  constructor(){}

}
