import * as types from './types';

/**
 * POST ACTION GENERIC
 */
export const GET_POST_REQUEST = 'GET_POST_REQUEST';
export const GET_POST_SUCCESS = 'GET_POST_SUCCESS';
export const GET_POST_FAILURE = 'GET_POST_FAILURE';

export const GET_POST_LIST_REQUEST = 'GET_POST_LIST_REQUEST';
export const GET_POST_LIST_SUCCESS = 'GET_POST_LIST_SUCCESS';
export const GET_POST_LIST_FAILURE = 'GET_POST_LIST_FAILURE';

export const getPostRequest = (id: number): types.GetPostRequest => ({
  type: GET_POST_REQUEST,
  payload: {
    id,
  },
});

export const getPostListRequest = (): types.GetPostListRequest => ({
  type: GET_POST_LIST_REQUEST,
  payload: {},
});
