/**
 * Initial state & Reducer
 */
import produce from 'immer';
import { TodosStateType, TodosActionsDataType } from './types';
import { CREATE, REMOVE, TOGGLE, CHANGE_INPUT } from './actions';

const initialState: TodosStateType = {
  todoItems: [],
  input: '',
};

let index: number = 0;

export default (state = initialState, action: TodosActionsDataType): TodosStateType => {
  switch (action.type) {
    case CREATE: {
      return produce(state, draft => {
        draft.input = '';
        draft.todoItems.push({
          id: index++,
          text: action.payload,
          done: false,
        });
      });
    }
    case REMOVE: {
      return produce(state, draft => {
        draft.todoItems.splice(
          draft.todoItems.findIndex(todo => todo.id === action.payload),
          1
        );
      });
    }
    case TOGGLE: {
      return produce(state, draft => {
        const item = draft.todoItems.find(todo => todo.id === action.payload);
        if (item) item.done = !item.done;
      });
    }
    case CHANGE_INPUT: {
      return produce(state, draft => {
        draft.input = action.payload;
      });
    }
    default: {
      return state;
    }
  }
};
