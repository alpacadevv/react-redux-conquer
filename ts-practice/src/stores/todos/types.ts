/**
 * State type & Action call data type
 */
import { CREATE, REMOVE, TOGGLE, CHANGE_INPUT } from './actions';

export interface TodoItemDataParams {
  id: number;
  text: string;
  done: boolean;
}

export interface TodosStateType {
  todoItems: TodoItemDataParams[];
  input: string;
}

interface CreateActionDataType {
  type: typeof CREATE;
  payload: string;
}

interface RemoveActionDataType {
  type: typeof REMOVE;
  payload: number;
}

interface ToggleActionDataType{
  type: typeof TOGGLE;
  payload: number;
}

interface ChangeInputActionDataType {
  type: typeof CHANGE_INPUT;
  payload: string;
}

export type TodosActionsDataType =
  | CreateActionDataType 
  | RemoveActionDataType
  | ToggleActionDataType
  | ChangeInputActionDataType;
