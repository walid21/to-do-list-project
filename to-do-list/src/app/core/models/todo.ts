import { StateTodo } from '../enums/state-todo';
import { TodoI } from '../interfaces/todo-i';

export class Todo implements TodoI {
  stateTodo = StateTodo.EN_COURS;
  id!: number;
  title!: string;

  constructor(obj?: Partial<Todo>) {
    if (obj) {
      Object.assign(this, obj);
    }
  }
}
