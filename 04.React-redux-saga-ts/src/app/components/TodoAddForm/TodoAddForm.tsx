import React, { useState } from 'react';
import './TodoAddForm.scss';

interface Props {
  createTodo(text: string): void;
}

const TodoAddForm: React.SFC<Props> = (props) => {
  const { createTodo } = props;
  const [text,setText] = useState('');

  const onChangeText = (e: React.FormEvent<HTMLInputElement>): void => {
    setText(e.currentTarget.value);
  };

  const onTodoSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    createTodo(text);
    setText('');
  };

  return (
    <form className="TodoAddForm" onSubmit={onTodoSubmit}>
      <input className="TodoAddForm__text" type="text" onChange={onChangeText} value={text}/>
      <button className="TodoAddForm__add">Add</button>
    </form>
  );
};

export default TodoAddForm;
