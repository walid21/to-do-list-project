import { StateTodo } from "../enums/state-todo";

export interface TodoI {
    title: String;
    stateTodo: StateTodo;
    id: number;
}
