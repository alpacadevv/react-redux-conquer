import React, { useState, useCallback, memo } from 'react';
import './TodoAddForm.scss';
import { CreateTodoAction } from '@/services/todo/types';

interface Props {
  createTodo: CreateTodoAction;
}

const TodoAddForm: React.SFC<Props> = memo(props => {
  const { createTodo } = props;
  const [text,setText] = useState('');

  const onChangeText = useCallback((e: React.FormEvent<HTMLInputElement>): void => {
    setText(e.currentTarget.value);
  }, []);

  const onTodoSubmit = useCallback((e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

    if (!text) return;

    createTodo(text);
    setText('');
  }, [text]);

  return (
    <form className="TodoAddForm" onSubmit={onTodoSubmit}>
      <input className="TodoAddForm__text" type="text" onChange={onChangeText} value={text}/>
      <button className="TodoAddForm__add">Add</button>
    </form>
  );
});

export default TodoAddForm;
