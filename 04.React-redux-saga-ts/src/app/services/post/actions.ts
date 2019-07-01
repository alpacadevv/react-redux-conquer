import { createAction } from 'redux-actions';

/**
 * POST ACTION GENERIC
 */
export const GET_POST_REQUEST = 'GET_POST_REQUEST';
export const GET_POST_SUCCESS = 'GET_POST_SUCCESS';
export const GET_POST_FAILURE = 'GET_POST_FAILURE';

export const GET_POST_LIST_REQUEST = 'GET_POST_LIST_REQUEST';
export const GET_POST_LIST_SUCCESS = 'GET_POST_LIST_SUCCESS';
export const GET_POST_LIST_FAILURE = 'GET_POST_LIST_FAILURE';

export const getPostRequest = createAction(GET_POST_REQUEST);
export const getPostListRequest = createAction(GET_POST_LIST_REQUEST);
