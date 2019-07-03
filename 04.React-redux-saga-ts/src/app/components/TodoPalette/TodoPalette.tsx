import React from 'react';
import './TodoPalette.scss';
import TodoPaletteItem from '../TodoPaletteItem';
import { ChangeTodoColorAction } from '@/services/todo/types';

interface Props {
  colorList: string[];
  changeTodoColor: ChangeTodoColorAction;
}

const TodoPalette: React.SFC<Props> = (props) => {
  const { colorList, changeTodoColor } = props;
  const paletteColorList = colorList.map(color => (
    <TodoPaletteItem className="TodoPalette__item" key={color} color={color} changeTodoColor={changeTodoColor} />
  ));

  return (
    <div className="TodoPalette">{paletteColorList}</div>
  );
};

export default TodoPalette;
