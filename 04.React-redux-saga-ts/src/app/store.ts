import { Dispatch, combineReducers, applyMiddleware, createStore, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { all } from 'redux-saga/effects';
import { TodoStateType } from './services/todo/types';
import { PostStateType } from './services/post/types';
import { postSaga } from './services/post/saga';
import todoReducer from './services/todo/reducer';
import postReducer from './services/post/reducer';

export interface RootStateType {
  todo: TodoStateType;
  post: PostStateType;
}

function* rootSaga() {
  yield all([
    postSaga(),
  ]);
}

const reducers = combineReducers({
  todo: todoReducer,
  post: postReducer,
});

const sagaMiddleware = createSagaMiddleware();
const enhancer = compose(
  applyMiddleware(sagaMiddleware),
  (window as any).__REDUX_DEVTOOLS_EXTENSION__ && (window as any).__REDUX_DEVTOOLS_EXTENSION__(),
);

export const store = createStore(
  reducers,
  enhancer,
);
console.log(store.getState());

sagaMiddleware.run(rootSaga);
