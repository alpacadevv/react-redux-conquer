import produce from 'immer';
import { PostStateType, PostActionType } from './types';
import * as actions from './actions';

const postState: PostStateType = {
  postList: [],
};

export default (state = postState, action: PostActionType): PostStateType => {
  switch (action.type) {
    case actions.GET_POST_REQUEST: {
      return state;
    }
    case actions.GET_POST_SUCCESS: {
      return produce(state, draft => {
        draft.postList.push({
          title: action.payload.post.title,
          body: action.payload.post.body,
        });
      });
    }
    case actions.GET_POST_FAILURE: {
      return state;
    }
    case actions.GET_POST_LIST_REQUEST: {
      return state;
    }
    case actions.GET_POST_LIST_SUCCESS: {
      return produce(state, draft => {
        draft.postList.push(...action.payload.postList);
      });
    }
    case actions.GET_POST_LIST_FAILURE: {
      return state;
    }
    default: {
      return state;
    }
  }
};
