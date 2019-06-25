import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { RootStateType } from '../stores';
import { TodoItemDataParams } from '../stores/todos/types';
import TodoListHooks from '../components/TodoListHooks';
import { create, remove, toggle, changeInput } from '../stores/todos/actions';

interface StateProps {
  todoItems: TodoItemDataParams[];
  input: string;
}

interface DispatchProps {
  create: (value: string) => {},
  remove: (value: number) => {},
  toggle: (value: number) => {},
  changeInput: (value: string) => {},
}

type Props = StateProps & DispatchProps

//interface 

class TodoListContainer extends React.Component<Props> {
  onCreate = (): void => {
    const { create, input } = this.props;
    create(input);
  }

  onRemove = (id: number): void => {
    const { remove } = this.props;
    remove(id);
  }

  onToggle = (id: number): void => {
    const { toggle } = this.props;
    toggle(id);
  }

  onChange = (e: React.FormEvent<HTMLFormElement>): void => {
    const { value } = e.currentTarget;
    const { changeInput } = this.props;
    changeInput(value);
  }

  render() {
    const { input, todoItems } = this.props;
    const { onCreate, onChange, onRemove, onToggle } = this;
    return (
      <TodoListHooks
        input={input}
        todoItems={todoItems}
        onCreate={onCreate}
        onChange={onChange}
        onRemove={onRemove}
        onToggle={onToggle}
      />
    );
  }
}

const mapStateProps = ({ todos }: RootStateType): StateProps => ({
  input: todos.input,
  todoItems: todos.todoItems,
});

const mapDispatchProps = (dispatch: Dispatch): DispatchProps => 
  bindActionCreators(
    {
      create,
      remove,
      toggle,
      changeInput
    },
    dispatch
  )

export default connect(
  mapStateProps,
  mapDispatchProps
)(TodoListContainer);
