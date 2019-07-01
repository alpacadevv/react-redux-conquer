import React from 'react';
import './TodoAddForm.scss';

const TodoAddForm = () => {
  return (
    <form className="TodoAddForm">
      <input className="TodoAddForm__text" type="text"/>
      <button className="TodoAddForm__add">Add</button>
    </form>
  );
};

export default TodoAddForm;
