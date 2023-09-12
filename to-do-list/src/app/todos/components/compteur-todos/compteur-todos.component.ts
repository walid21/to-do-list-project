import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-compteur-todos',
  templateUrl: './compteur-todos.component.html',
  styleUrls: ['./compteur-todos.component.scss']
})
export class CompteurTodosComponent {

  @Input() compteur!: number;

  constructor(){}

}
