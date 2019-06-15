import React, { useCallback, memo } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import './PaletteItem.scss';

const PaletteItem = memo(({ className, color, onChangeColor }) => {
  const onClick = useCallback(color => () => onChangeColor(color), []);

  return (
    <div className={classNames(className, 'PaletteItem')} style={{backgroundColor: color}} onClick={onClick(color)} />
  );
});

PaletteItem.propTypes = {
  color: PropTypes.string.isRequired,
  onChangeColor: PropTypes.func.isRequired,
};

export default PaletteItem;
