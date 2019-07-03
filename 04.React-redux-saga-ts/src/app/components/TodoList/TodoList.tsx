import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import './TodoList.scss';
import { RootStateType } from '@/store';
import { toggleTodo, removeTodo } from '@/services/todo/actions';
import { TodoType } from '@/services/todo/types';
import TodoItem from '../TodoItem';

interface TodoHeaderProps {
  todoList: TodoType[];
}

type Props = TodoHeaderProps & ReturnType<typeof mapDispatchToProps>;

const TodoList: React.SFC<Props> = props => {
  const { todoList, toggleTodo, removeTodo } = props;
  const todoListElement: React.ReactElement[] = todoList.map(todo => (
    <TodoItem
      className="TodoList__item"
      key={`todoItemCheck${todo.id}`}
      id={todo.id}
      todo={todo}
      toggleTodo={toggleTodo}
      removeTodo={removeTodo}
    />
  ));
  return (
    <ul className="TodoList">{todoListElement}</ul>
  );
};

const mapStateToProps = ({ todo }: RootStateType) => ({
  todoList: todo.todoList,
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(
  { toggleTodo, removeTodo },
  dispatch
);

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
