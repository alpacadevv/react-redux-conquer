import { Action } from '@/utils/typeHelper';
import { 
  CREATE_TODO,
  REMOVE_TODO,
  TOGGLE_TODO,
  CHANGE_TODO_COLOR,
} from './actions';

export interface TodoType {
  id: number;
  text: string;
  done: boolean;
}

export interface TodoStateType {
  todoList: TodoType[];
  selectedColor: string;
  colorList: string[];
}

/**
 * TODO ACTIONS TYPE
 */
export interface CreateTodo extends Action<typeof CREATE_TODO, {
  text: string;
}>{}

export interface RemoveTodo extends Action<typeof REMOVE_TODO, {
  id: number;
}>{}

export interface ToggleTodo extends Action<typeof TOGGLE_TODO, {
  id: number;
}>{}

export interface ChangeTodoColor extends Action<typeof CHANGE_TODO_COLOR, {
  color: string;
}>{}

export type TodoActionType = 
  | CreateTodo
  | RemoveTodo
  | ToggleTodo
  | ChangeTodoColor;
