import produce from 'immer';
import { TodoStateType, TodoActionType } from './types';
import * as actions from './actions';

const todoState: TodoStateType = {
  todoList: [],
  selectedColor: '#16a085',
  colorList: [
    'red',
    'orange',
    'yellow',
    'green',
    'blue',
    'indigo',
    '#16a085'
  ],
};

let todoIndex: number = 0;

export default (state = todoState, action: TodoActionType): TodoStateType => {
  console.log(action);
  switch (action.type) {
    case actions.CREATE_TODO: {
      return produce(state, draft => {
        draft.todoList.push({
          id: todoIndex++,
          text: action.payload.text,
          done: false,
        });
      });
    }
    case actions.REMOVE_TODO: {
      return produce(state, draft => {
        draft.todoList.splice(
          draft.todoList.findIndex(todo => todo.id === action.payload.id),
          1
        );
      });
    }
    case actions.TOGGLE_TODO: {
      return produce(state, draft => {
        const item = draft.todoList.find(todo => todo.id === action.payload.id);
        if (item) item.done = !item.done;
      });
    }
    case actions.CHANGE_TODO_COLOR: {
      return produce(state, draft => {
        draft.selectedColor = action.payload.color;
      });
    }
    default: {
      return state;
    }
  }
};
