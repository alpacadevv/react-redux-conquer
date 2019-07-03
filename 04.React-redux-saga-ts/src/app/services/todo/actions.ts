import * as types from './types';

/**
 * TODO ACTION GENERIC
 */
export const CREATE_TODO = 'CREATE_TODO';
export const REMOVE_TODO = 'REMOVE_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';
export const CHANGE_TODO_COLOR = 'CHANGE_TODO_COLOR';

export const createTodo: types.CreateTodoAction = text => ({
  type: CREATE_TODO,
  payload: {
    text,
  },
});

export const removeTodo: types.RemoveTodoAction = id => ({
  type: REMOVE_TODO,
  payload: {
    id,
  },
});

export const toggleTodo: types.ToggleTodoAction = id => ({
  type: TOGGLE_TODO,
  payload: {
    id,
  },
});

export const changeTodoColor: types.ChangeTodoColorAction = color => ({
  type: CHANGE_TODO_COLOR,
  payload: {
    color,
  },
});
