import React, { memo } from 'react';
import PropTypes from 'prop-types';
import './TodoPalette.scss';

const PaletteItem = ({ color, onChangeColor }) => {
  const onClick = color => () => onChangeColor(color);

  return (
    <div className="TodoPalette__item" style={{backgroundColor: color}} onClick={onClick(color)} />
  );
};

PaletteItem.propTypes = {
  color: PropTypes.string.isRequired,
  onChangeColor: PropTypes.func.isRequired,
};

const TodoPalette = memo(({ colors, onChangeColor }) => {
  const paletteColors = colors.map(color => (
    <PaletteItem key={color} color={color} onChangeColor={onChangeColor} />
  ));

  return (
    <div className="TodoPalette">{paletteColors}</div>
  );
});

PaletteItem.propTypes = {
  color: PropTypes.string.isRequired,
  onChangeColor: PropTypes.func.isRequired,
};

export default TodoPalette;
