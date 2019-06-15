import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { completeTodo, removeTodo } from '../store/modules/todos';
import TodoList from '../components/TodoList';

const TodoListContainer = props => <TodoList {...props} />;

const mapStateToProps = ({ todos }) => ({
  todos: todos.todos,
});

const mapDispatchToProps = dispatch => bindActionCreators(
  { completeTodo, removeTodo },
  dispatch,
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoListContainer);
