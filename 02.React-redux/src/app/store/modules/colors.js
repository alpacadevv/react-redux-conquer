import { createAction, handleActions } from 'redux-actions';

/**
 * 액션 타입 정의
 */
const CHANGE_COLOR = 'colors/CHANGE_COLOR';

/**
 * 액션 생성함수 정의
 */
export const changeColor = createAction(CHANGE_COLOR, color => color);

/**
 * 초기 스테이트 값
 */
const initialState = {
  selectedColor: '#16a085',
  colors: [
    'red',
    'orange',
    'yellow',
    'green',
    'blue',
    'indigo',
    '#16a085'
  ],
};

/**
 * 리듀서 함수 정의
 */
export default handleActions(
  {
    [CHANGE_COLOR]: (state, action) => ({
      ...state,
      selectedColor: action.payload,
    }),
  },
  initialState,
);
