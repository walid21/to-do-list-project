import { Pipe, PipeTransform } from '@angular/core';
import { StateTodo } from 'src/app/core/enums/state-todo';
import { Todo } from 'src/app/core/models/todo';

@Pipe({
  name: 'pipeCompteur',
  pure: false,
})
export class PipeCompteurPipe implements PipeTransform {

  transform(tab: Todo[]): number {
    console.log("pipe")
    if(tab){
      return tab.filter((todo) => todo.stateTodo===StateTodo.EN_COURS).length;
    }
    return -1;
  }

}
