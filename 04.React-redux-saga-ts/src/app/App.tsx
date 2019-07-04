import React from 'react';
import './App.scss';
import TodoHeader from './components/TodoHeader';
import TodoList from './components/TodoList';
import TodoPostHeader from './components/TodoPostHeader';
import TodoPostList from './components/TodoPostList';

const App = () => (
  <div className="App">
    <TodoHeader />
    <TodoList />
    <TodoPostHeader />
    <TodoPostList />
  </div>
);

export default App;
