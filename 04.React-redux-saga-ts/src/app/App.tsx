import React from 'react';
import './App.scss';
import TodoHeader from './components/TodoHeader';
import TodoList from './components/TodoList';

const App = () => (
  <div className="App">
    <TodoHeader />
    <TodoList />
  </div>
);

export default App;
