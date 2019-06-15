import { createAction, handleActions } from 'redux-actions';
import produce from 'immer';
import { createActionType } from '../../sagas';

export const GET_POST = createActionType('post/GET_POST');
export const GET_POSTS = createActionType('post/GET_POSTS');

export const getPost = createAction(GET_POST.REQUEST, id => id);
export const getPosts = createAction(GET_POSTS.REQUEST);

const initialState = {
  posts: [],
};

export default handleActions(
  {
    [GET_POST.REQUEST]: (state, action) => {
      console.log('[POST REDUCER] GET_POST_REQUEST');
      return state;
    },
    [GET_POST.SUCCESS]: (state, action) => {
      console.log('[POST REDUCER] GET_POST_SUCCESS', action);
      return produce(state, draft => {
        draft.posts.push({
          title: action.payload.title,
          body: action.payload.body,
        });
      });
    },
    [GET_POST.FAILURE]: (state, action) => {
      console.log('[POST REDUCER] GET_POST_FAILURE', action);
      return state;
    },
    [GET_POSTS.REQUEST]: (state, action) => {
      console.log('[POST REDUCER] GET_POSTS_REQUEST', action);
      return state;
    },
    [GET_POSTS.SUCCESS]: (state, action) => {
      console.log('[POST REDUCER] GET_POST_SUCCESS', action);
      return produce(state, draft => {
        draft.posts.push(...action.payload);
      });
    },
    [GET_POSTS.FAILURE]: (state, action) => {
      console.log('[POST REDUCER] GET_POST_FAILURE', action);
      return state;
    },
  },
  initialState,
);
