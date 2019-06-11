import { createAction, handleActions } from 'redux-actions';

/**
 * 액션 타입 정의
 */
const ADD_TODO = 'todos/ADD_TODO';
const COMPLETE_TODO = 'todos/COMPLETE_TODO';
const REMOVE_TODO = 'todos/REMOVE_TODO';

/**
 * 액션 생성함수 정의
 */
export const addTodo = createAction(ADD_TODO, text => text);
export const completeTodo = createAction(COMPLETE_TODO, id => id);
export const removeTodo = createAction(REMOVE_TODO, id => id);

/**
 * 초기 스테이트 값
 */
const initialState = {
  todos: [],
};

/**
 * 리듀서 함수 정의
 */
export default handleActions(
  {
    [ADD_TODO]: (state, action) => ({
      ...state,
      todos: [...state.todos, { 
        text: action.payload,
        isComplete: false,
      }],
    }),
    [COMPLETE_TODO]: (state, action) => ({
      ...state,
      todos: state.todos.map(
        (todo, id) => id === action.payload
        ? {...todo, isComplete: !todo.isComplete}
        : todo
      ),
    }),
    [REMOVE_TODO]: (state, action) => ({
        ...state,
        todos: state.todos.filter((todo, id) => id !== action.payload),
    }),
  },
  initialState,
);
