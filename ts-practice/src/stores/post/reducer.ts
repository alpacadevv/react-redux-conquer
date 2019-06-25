import produce from 'immer';
import { PostStateType, PostActionsDataType } from './types';
import { GET_POST, GET_POSTS } from './actions';

const initialState: PostStateType = {
  posts: [],
};

export default (state = initialState, action: PostActionsDataType): PostStateType => {
  switch (action.type) {
    case GET_POST.REQUEST: {
      return state;
    }
    case GET_POST.SUCCESS: {
      return produce(state, draft => {
        draft.posts.push({
          title: action.payload.title,
          body: action.payload.body,
        });
      });
    }
    case GET_POST.FAILURE: {
      return state;
    }
    case GET_POSTS.REQUEST: {
      return state;
    }
    case GET_POSTS.SUCCESS: {
      return produce(state, draft => {
        draft.posts.push(...action.payload);
      });
    }
    case GET_POSTS.FAILURE: {
      return state;
    }
    default: {
      return state;
    }
  }
};
