import { all, call } from 'redux-saga/effects';
import post from './post';

export const createActionType = (actionType) => ({
  REQUEST: `${actionType}_REQUEST`,
  SUCCESS: `${actionType}_SUCCESS`,
  FAILURE: `${actionType}_FAILURE`,
});

export default function* rootSaga() {
  yield all([
    call(post),
  ]);
}
