import produce from 'immer';
import { TodoStateType, TodoActionType } from './types';
import { CREATE_TODO, REMOVE_TODO, TOGGLE_TODO } from './actions';

const todoState: TodoStateType = {
  todoList: [],
};

let todoIndex: number = 0;

export default (state = todoState, action: TodoActionType): TodoStateType => {
  switch (action.type) {
    case CREATE_TODO: {
      return produce(state, draft => {
        draft.todoList.push({
          id: todoIndex++,
          text: action.text,
          done: false,
        });
      });
    }
    case REMOVE_TODO: {
      return produce(state, draft => {
        draft.todoList.splice(
          draft.todoList.findIndex(todo => todo.id === action.id),
          1
        );
      });
    }
    case TOGGLE_TODO: {
      return produce(state, draft => {
        const item = draft.todoList.find(todo => todo.id === action.id);
        if (item) item.done = !item.done;
      });
    }
    default: {
      return state;
    }
  }
};
