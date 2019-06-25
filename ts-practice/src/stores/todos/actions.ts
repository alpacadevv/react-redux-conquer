/**
 * Action type & Action function
 */
import { createAction } from 'redux-actions';

export const CREATE = 'todo/CREATE';
export const REMOVE = 'todo/REMOVE';
export const TOGGLE = 'todo/TOGGLE';
export const CHANGE_INPUT = 'todo/CHANGE_INPUT';

export const create = createAction(CREATE);
export const remove = createAction(REMOVE);
export const toggle = createAction(TOGGLE);
export const changeInput = createAction(CHANGE_INPUT);
