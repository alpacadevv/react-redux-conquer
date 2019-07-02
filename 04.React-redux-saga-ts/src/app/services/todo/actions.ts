import { createAction } from 'redux-actions';

/**
 * TODO ACTION GENERIC
 */
export const CREATE_TODO = 'CREATE_TODO';
export const REMOVE_TODO = 'REMOVE_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';
export const CHANGE_TODO_COLOR = 'CHANGE_TODO_COLOR';

export const createTodo = createAction(CREATE_TODO);
export const removeTodo = createAction(REMOVE_TODO);
export const toggleTodo = createAction(TOGGLE_TODO);
export const changeTodoColor = createAction(CHANGE_TODO_COLOR);