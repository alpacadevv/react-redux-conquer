import React from 'react';
import './App.scss';
import TodoHeaderContainer from './containers/TodoHeaderContainer';
import TodoListContainer from './containers/TodoListContainer';

const App = () => (
  <div className="App">
    <TodoHeaderContainer />
    <TodoListContainer />
  </div>
);

export default App;
