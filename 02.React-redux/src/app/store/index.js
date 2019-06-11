import { combineReducers } from 'redux';
import todos from './modules/todos';
import colors from './modules/colors';

export default combineReducers({
  todos,
  colors,
});
