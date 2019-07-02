import { Action } from '@/app/utils/typeHelper';
import { 
  CREATE_TODO,
  REMOVE_TODO,
  TOGGLE_TODO
} from './actions';

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
interface CreateTodo extends Action<typeof CREATE_TODO, {
  text: string;
}>{}

interface RemoveTodo extends Action<typeof REMOVE_TODO, {
  id: number;
}>{}

interface ToggleTodo extends Action<typeof TOGGLE_TODO, {
  id: number;
}>{}

export type TodoActionType = 
  | CreateTodo
  | RemoveTodo
  | ToggleTodo;
