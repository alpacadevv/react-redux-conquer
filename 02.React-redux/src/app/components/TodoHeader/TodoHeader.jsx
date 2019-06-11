import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import './TodoHeader.scss';
import TodoAddForm from '../TodoAddForm';
import TodoPalette from '../TodoPalette';

const TodoHeader = ({ selectedColor, colors, addTodo, changeColor }) => {

  const handleAddTodo = useCallback((text) => addTodo(text), []);
  const handleChangeColor = useCallback(color => changeColor(color), []);

  return (
    <div className="TodoHeader" style={{backgroundColor: selectedColor}}>
      <h1 className="TodoHeader__title">TO-DO LIST</h1>
      <TodoAddForm
        onAddTodo={handleAddTodo}
      />
      <TodoPalette
        colors={colors}
        onChangeColor={handleChangeColor}
      />
    </div>
  );
};

TodoHeader.propTypes = {
  selectedColor: PropTypes.string.isRequired,
  colors: PropTypes.arrayOf(PropTypes.string).isRequired,
  addTodo: PropTypes.func.isRequired,
  changeColor: PropTypes.func.isRequired,
};

export default TodoHeader;
