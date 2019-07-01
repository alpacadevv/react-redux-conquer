import React from 'react';
import './App.scss';
import Counter from './components/Counter';
import TodoHeader from './components/TodoHeader';

const App = () => (
  <div className="App">
    {/* <Counter name='react!' /> */}
    <TodoHeader />
  </div>
);

export default App;
