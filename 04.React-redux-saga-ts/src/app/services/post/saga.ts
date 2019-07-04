import { all, call, put, fork, takeEvery } from 'redux-saga/effects';
import axios from 'axios';
import * as actions from './actions';

function getPostAPI(postId = 1) {
  return axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}`);
}

function getPostListAPI() {
  return axios.get('https://jsonplaceholder.typicode.com/posts');
}

function* getPost({ payload }: ReturnType<typeof actions.getPostRequest>) {
  const { id } = payload;

  try {
    const res = yield call(getPostAPI, id);

    yield put({
      type: actions.GET_POST_SUCCESS,
      payload: {
        post: res.data,
      },
    });
  } catch (e) {
    yield put({
      type: actions.GET_POST_FAILURE,
      error: e,
    });
  }
}

function* watchGetPost() {
  yield takeEvery(actions.GET_POST_REQUEST, getPost);
}

function* getPostList() {
  try {
    const res = yield call(getPostListAPI);

    yield put({
      type: actions.GET_POST_LIST_SUCCESS,
      payload: {
        postList: res.data,
      },
    });
  } catch (e) {
    yield put({
      type: actions.GET_POST_LIST_FAILURE,
      error: e,
    });
  }
}

function* watchGetPostList() {
  yield takeEvery(actions.GET_POST_LIST_REQUEST, getPostList);
}

export function* postSaga() {
  yield all([
    fork(watchGetPost),
    fork(watchGetPostList),
  ]);
}
