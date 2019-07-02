import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import './TodoHeader.scss';
import TodoAddForm from '../TodoAddForm';
import { RootStateType } from '@/store';
import { createTodo, changeTodoColor } from '@/services/todo/actions';

const TodoHeader = () => {
  return (
    <div className="TodoHeader" style={{backgroundColor: 'green'}}>
      <h1 className="TodoHeader__title">TO-DO LIST</h1>
      <TodoAddForm />
    </div>
  );
};

const mapStateToProps = ({ todo }: RootStateType) => ({
  colorList: todo.colorList,
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(
  {createTodo, changeTodoColor},
  dispatch
);

export default connect(mapStateToProps, mapDispatchToProps)(TodoHeader);