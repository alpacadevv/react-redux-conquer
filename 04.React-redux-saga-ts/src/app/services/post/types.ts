import { Action } from '@/utils/typeHelper';
import {
  GET_POST_REQUEST,
  GET_POST_SUCCESS,
  GET_POST_FAILURE,
  GET_POST_LIST_REQUEST,
  GET_POST_LIST_SUCCESS,
  GET_POST_LIST_FAILURE
} from './actions';

export interface PostType {
  title: string;
  body: string;
}

export interface PostStateType {
  postList: PostType[];
}

/**
 * GET_POST ACTIONS TYPE
 */
export interface GetPostRequest extends Action<typeof GET_POST_REQUEST, {
  id: number;
}> {}

interface GetPostSuccess extends Action<typeof GET_POST_SUCCESS, {
  post: PostType;
}> {}

interface GetPostFailure extends Action<typeof GET_POST_FAILURE, {
}> {}

/**
 * GET_POST_LIST ACTIONS TYPE
 */
export interface GetPostListRequest extends Action<typeof GET_POST_LIST_REQUEST, {}> {}

interface GetPostListSuccess extends Action<typeof GET_POST_LIST_SUCCESS, {
  postList: PostType[];
}> {}

interface GetPostListFailure extends Action<typeof GET_POST_LIST_FAILURE, {
}> {}

export type PostActionType =
  | GetPostRequest
  | GetPostSuccess
  | GetPostFailure
  | GetPostListRequest
  | GetPostListSuccess
  | GetPostListFailure;

/**
 * POST ACTIONS FORMAT
 */
export interface GetPostRequestAction {
  (id: number): GetPostRequest;
}

export interface GetPostListRequestAction {
  (): GetPostListRequest;
}
