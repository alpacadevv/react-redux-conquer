import React from 'react';
import classNames from 'classnames';
import './TodoItem.scss';
import { TodoType } from '@/services/todo/types';
import { ToggleTodoAction, RemoveTodoAction } from '@/services/todo/types';

interface Props {
  className: string;
  id: number;
  todo: TodoType;
  toggleTodo: ToggleTodoAction;
  removeTodo: RemoveTodoAction;
}

const TodoItem: React.SFC<Props> = props => {
  const { className, id, todo, toggleTodo, removeTodo} = props;
  const onToggleTodo = () => {
    toggleTodo(id);
  };

  const onRemoveTodo = () => {
    removeTodo(id);
  };

  return (
    <li className={classNames(className, 'TodoItem')}>
      <input type="checkbox" className="TodoItem__checkInput" id={`todoItemCheck${id}`} onClick={onToggleTodo} />
      <label htmlFor={`todoItemCheck${id}`} className="TodoItem__rowWrap">
        <span
          className={classNames('TodoItem__checkBox', {
            'TodoItem__checkBox--completed': todo.done,
          })}
        />
        <span className={classNames('TodoItem__contents', {
            'TodoItem__contents--completed': todo.done,
          })}
        >{todo.text}</span>
      </label>
      <button className="TodoItem__remove" onClick={onRemoveTodo}>REMOVE</button>
    </li>
  );
};

export default TodoItem;
