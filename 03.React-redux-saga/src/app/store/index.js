import { combineReducers } from 'redux';
import todos from './modules/todos';
import colors from './modules/colors';
import post from './modules/post';

export default combineReducers({
  todos,
  colors,
  post,
});
