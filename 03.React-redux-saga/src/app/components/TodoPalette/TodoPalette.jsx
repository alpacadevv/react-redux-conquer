import React, { memo } from 'react';
import PropTypes from 'prop-types';
import './TodoPalette.scss';
import PaletteItem from './PaletteItem';

const TodoPalette = memo(({ colors, onChangeColor }) => {
  const paletteColors = colors.map(color => (
    <PaletteItem className="TodoPalette__item" key={color} color={color} onChangeColor={onChangeColor} />
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
