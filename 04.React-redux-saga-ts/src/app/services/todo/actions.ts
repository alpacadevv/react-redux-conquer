import * as types from './types';

/**
 * TODO ACTION GENERIC
 */
export const CREATE_TODO = 'CREATE_TODO';
export const REMOVE_TODO = 'REMOVE_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';
export const CHANGE_TODO_COLOR = 'CHANGE_TODO_COLOR';

export const createTodo = (text: string): types.CreateTodo => ({
  type: CREATE_TODO,
  payload: {
    text,
  },
});
export const removeTodo = (id: number): types.RemoveTodo => ({
  type: REMOVE_TODO,
  payload: {
    id,
  },
})
export const toggleTodo = (id: number): types.ToggleTodo => ({
  type: TOGGLE_TODO,
  payload: {
    id,
  },
})
export const changeTodoColor = (color: string): types.ChangeTodoColor => ({
  type: CHANGE_TODO_COLOR,
  payload: {
    color,
  },
});