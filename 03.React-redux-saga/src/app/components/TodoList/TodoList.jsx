import React from 'react';
import PropTypes from 'prop-types';
import './TodoList.scss';
import TodoItem from './TodoItem';

const TodoList = ({ todos, completeTodo, removeTodo }) => {

  const todoList = todos.map((todo, id) => (
    <TodoItem
      className="TodoList__item"
      key={`todoItemCheck${id}`}
      id={id}
      todo={todo}
      completeTodo={completeTodo}
      removeTodo={removeTodo}
    />
  ));

  return (
    <ul className="TodoList">{todoList}</ul>
  );
};

TodoList.propTypes = {
  todos: PropTypes.array.isRequired,
  completeTodo: PropTypes.func.isRequired,
  removeTodo: PropTypes.func.isRequired,
};

export default TodoList;
