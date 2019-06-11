import React, { useState, useRef, useCallback, memo } from 'react';
import PropTypes from 'prop-types';
import './TodoAddForm.scss';

const TodoAddForm = memo(({ onAddTodo }) => {
  const [todoText, setTodoText] = useState('');
  const inputRef = useRef(null);

  const onChangeTodoText = useCallback((e) => {
    setTodoText(e.target.value);
  }, []);

  const onTodoSubmit = useCallback((e) => {
    e.preventDefault();

    if (todoText === '') {
      return alert('내용을 입력해주세요');
    }

    onAddTodo(todoText);
    inputRef.current.value = '';
    setTodoText('');
  }, [todoText]);

  return (
    <form className="TodoAddForm" onSubmit={onTodoSubmit}>
      <input className="TodoAddForm__text" ref={inputRef} type="text" value={todoText} onChange={onChangeTodoText} />
      <button className="TodoAddForm__add" type="submit">Add</button>
    </form>
  );
});

TodoAddForm.propTypes = {
  onAddTodo: PropTypes.func.isRequired,
};

export default TodoAddForm;
