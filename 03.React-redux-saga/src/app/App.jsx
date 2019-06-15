import React from 'react';
import './App.scss';
import TodoHeaderContainer from './containers/TodoHeaderContainer';
import TodoListContainer from './containers/TodoListContainer';
import TodoPost from './components/TodoPost';

const App = () => (
  <div className="App">
    <TodoHeaderContainer />
    <TodoListContainer />
    <TodoPost />
  </div>
);

export default App;
// https://jsonplaceholder.typicode.com/posts/