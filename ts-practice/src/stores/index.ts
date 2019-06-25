/**
 * States & Reducers
 */
import { combineReducers } from 'redux';
import { all, call } from 'redux-saga/effects';
import { TodosStateType } from './todos/types';
import { PostStateType } from './post/types';
import postSaga from './post/saga';
import todosReducer from './todos/reducer';
import postReducer from './post/reducer';

// 모든 스테이트타입들을 모아둔 root state type
export interface RootStateType {
  todos: TodosStateType,
  post: PostStateType,
};

export function* rootSaga() {
  yield all([
    call(postSaga),
  ]);
};

export default combineReducers({
  todos: todosReducer,
  post: postReducer,
});
