import { createAction } from 'redux-actions';
import { createActionType } from '../../utils/saga';

export const GET_POST = createActionType('post/GET_POST');
export const GET_POSTS = createActionType('post/GET_POSTS');

export const getPost = createAction(GET_POST.REQUEST);
export const getPosts = createAction(GET_POSTS.REQUEST);