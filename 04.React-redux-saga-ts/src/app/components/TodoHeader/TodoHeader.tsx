import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import './TodoHeader.scss';
import { RootStateType } from '@/store';
import { createTodo, changeTodoColor } from '@/services/todo/actions';
import TodoAddForm from '../TodoAddForm';
import TodoPalette from '../TodoPalette';

interface TodoHeaderProps {
  selectedColor: string;
  colorList: string[];
}

type Props = TodoHeaderProps & ReturnType<typeof mapDispatchToProps>;

const TodoHeader: React.SFC<Props> = props => {
  const { selectedColor, colorList, createTodo, changeTodoColor } = props;

  return (
    <div className="TodoHeader" style={{backgroundColor: selectedColor}}>
      <h1 className="TodoHeader__title">TO-DO LIST</h1>
      <TodoAddForm createTodo={createTodo} />
      <TodoPalette 
        colorList={colorList} 
        changeTodoColor={changeTodoColor}
      />
    </div>
  );
};

const mapStateToProps = ({ todo }: RootStateType) => ({
  selectedColor: todo.selectedColor,
  colorList: todo.colorList,
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(
  { createTodo, changeTodoColor },
  dispatch
);

export default connect(mapStateToProps, mapDispatchToProps)(TodoHeader);
