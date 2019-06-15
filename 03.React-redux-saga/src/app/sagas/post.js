import { all, put, call, takeEvery, fork } from 'redux-saga/effects';
import axios from 'axios';
import { GET_POST, GET_POSTS } from '../store/modules/post';

function getPostAPI(postId = 1) {
  return axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}`);
}

function getPostsAPI() {
  return axios.get('https://jsonplaceholder.typicode.com/posts');
}

function* getPost(action) {
  try {
    console.log('[POST SAGA] getPost', action);
    const res = yield call(getPostAPI, action.payload);
    yield put({
      type: GET_POST.SUCCESS,
      payload: res.data,
    });
  } catch (e) {
    yield put({
      type: GET_POST.FAILURE,
      error: e,
    });
  }
}

function* watchGetPost() {
  yield takeEvery(GET_POST.REQUEST, getPost);
}

function* getPosts() {
  try {
    console.log('[POST SAGA] getPosts');
    const res = yield call(getPostsAPI);
    yield put({
      type: GET_POSTS.SUCCESS,
      payload: res.data,
    })
  } catch (e) {
    yield put({
      type: GET_POSTS.FAILURE,
      error: e,
    });
  }
}

function* watchGetPosts() {
  yield takeEvery(GET_POSTS.REQUEST, getPosts);
}

export default function* postSaga() {
  yield all([
    fork(watchGetPost),
    fork(watchGetPosts),
  ])
}
