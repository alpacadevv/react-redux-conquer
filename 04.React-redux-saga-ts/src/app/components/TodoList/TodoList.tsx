import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import './TodoList.scss';
import { RootStateType } from '@/store';
import { toggleTodo, removeTodo } from '@/services/todo/actions'

const TodoList = () => {
  return (
    <h1>Hello TodoList</h1>
  );
};

const mapStateToProps = ({ todo }: RootStateType) => ({
  todoList: todo.todoList,
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(
  {toggleTodo, removeTodo},
  dispatch
);

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
