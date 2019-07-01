import React from 'react';
import './TodoHeader.scss';
import TodoAddForm from '../TodoAddForm';

const TodoHeader = () => {
  return (
    <div className="TodoHeader" style={{backgroundColor: 'green'}}>
      <h1 className="TodoHeader__title">TO-DO LIST</h1>
      <TodoAddForm />
    </div>
  );
};

export default TodoHeader;