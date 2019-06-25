import React from 'react';
import TodoItem from './TodoItem';
import { TodoItemDataParams } from '../stores/todos/types';

interface Props {
  input: string;
  todoItems: TodoItemDataParams[];
  onCreate(): void;
  onRemove(id: number): void;
  onToggle(id: number): void;
  onChange(e: any): void;
}

const TodoList: React.FC<Props> = ({
  input, todoItems, onCreate, onRemove, onToggle, onChange
}) => {
  const todoItemList = todoItems.map(todo => (
    <TodoItem
      key={todo.id}
      done={todo.done}
      onToggle={() => onToggle(todo.id)}
      onRemove={() => onRemove(todo.id)}
      text={todo.text}
    />
  ));

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onCreate();
  };

  return (
    <div>
      <h1>What's todo? ver. Hooks</h1>
      <form onSubmit={onSubmit}>
        <input type="text" onChange={onChange} value={input}/>
        <button type="submit">add</button>
      </form>
      <ul>{todoItemList}</ul>
    </div>
  );
};

export default TodoList;
