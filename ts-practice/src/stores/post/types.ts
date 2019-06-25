import { GET_POST, GET_POSTS } from './actions';

export interface PostDataParams {
  title: string;
  body: string;
}

export interface PostStateType {
  posts: PostDataParams[];
}

interface commonDataType {
  type: string;
  payload?: any;
}

interface PostRequestActionDataType extends commonDataType {
  type: typeof GET_POST.REQUEST;
}

interface PostSuccessActionDataType extends commonDataType {
  type: typeof GET_POST.SUCCESS;
  payload?: PostDataParams;
}

interface PostFailureActionDataType extends commonDataType {
  type: typeof GET_POST.FAILURE;
}

interface PostsRequestActionDataType extends commonDataType {
  type: typeof GET_POSTS.REQUEST;
}

interface PostsSuccessActionDataType extends commonDataType {
  type: typeof GET_POSTS.SUCCESS;
  payload?: PostDataParams;
}

interface PostsFailureActionDataType extends commonDataType {
  type: typeof GET_POSTS.FAILURE;
}

export type PostActionsDataType =
  | PostRequestActionDataType
  | PostSuccessActionDataType
  | PostFailureActionDataType
  | PostsRequestActionDataType
  | PostsSuccessActionDataType
  | PostsFailureActionDataType;
