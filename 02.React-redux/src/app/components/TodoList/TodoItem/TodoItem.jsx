import React, { useCallback, memo } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import './TodoItem.scss';

const TodoItem = memo(({ className, id, todo, completeTodo, removeTodo}) => {

  const onClickComplete = useCallback(() => completeTodo(id), []);
  const onClickRemove = useCallback(() => removeTodo(id), []);

  return (
    <li className={classNames(className, 'TodoItem')}>
      <input type="checkbox" className="TodoItem__checkInput" id={`todoItemCheck${id}`} onClick={onClickComplete} />
      <label htmlFor={`todoItemCheck${id}`} className="TodoItem__rowWrap">
        <span
          className={classNames('TodoItem__checkBox', {
            'TodoItem__checkBox--completed': todo.isComplete,
          })}
        />
        <span className={classNames('TodoItem__contents', {
            'TodoItem__contents--completed': todo.isComplete,
          })}
        >{todo.text}</span>
      </label>
      <button className="TodoItem__remove" onClick={onClickRemove}>REMOVE</button>
    </li>
  );
});

TodoItem.propTypes = {
  id: PropTypes.number.isRequired,
  todo: PropTypes.shape({
    text: PropTypes.string,
    isComplete: PropTypes.bool,
  }).isRequired,
  completeTodo: PropTypes.func.isRequired,
  removeTodo: PropTypes.func.isRequired,
};

export default TodoItem;
