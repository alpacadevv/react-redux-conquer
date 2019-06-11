import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addTodo } from '../store/modules/todos';
import { changeColor } from '../store/modules/colors';
import TodoHeader from '../components/TodoHeader';

const TodoHeaderContainer = props => <TodoHeader {...props} />;

const mapStateToProps = ({ colors }) => ({
  selectedColor: colors.selectedColor,
  colors: colors.colors,
});

const mapDispatchToProps = dispatch => bindActionCreators(
  { addTodo, changeColor },
  dispatch,
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoHeaderContainer);
