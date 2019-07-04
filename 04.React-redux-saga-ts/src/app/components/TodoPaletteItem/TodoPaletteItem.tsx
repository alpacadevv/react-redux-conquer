import React, { useCallback } from 'react';
import classNames from 'classnames';
import './TodoPaletteItem.scss';
import { ChangeTodoColorAction } from '@/services/todo/types';

interface Props {
  className: string;
  color: string;
  changeTodoColor: ChangeTodoColorAction;
}

const TodoPaletteItem: React.SFC<Props> = ({ className, color, changeTodoColor }) => {
  const onClick = (color: string) => useCallback(() => changeTodoColor(color), []);
  return (
    <div
      className={classNames(className, 'TodoPaletteItem')} 
      style={{backgroundColor: color}} 
      onClick={onClick(color)}
    />
  );
};

export default TodoPaletteItem;
