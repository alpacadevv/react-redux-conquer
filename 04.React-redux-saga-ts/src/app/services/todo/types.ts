import { CREATE_TODO, REMOVE_TODO, TOGGLE_TODO } from './actions';

export interface TodoType {
  id: number;
  text: string;
  done: boolean;
}

export interface TodoStateType {
  todoList: TodoType[];
}

/**
 * TODO ACTIONS TYPE
 */
interface CreateTodo {
  type: typeof CREATE_TODO;
  text: string;
}

interface RemoveTodo {
  type: typeof REMOVE_TODO;
  id: number;
}

interface ToggleTodo {
  type: typeof TOGGLE_TODO;
  id: number;
}

export type TodoActionType = CreateTodo | RemoveTodo | ToggleTodo;
