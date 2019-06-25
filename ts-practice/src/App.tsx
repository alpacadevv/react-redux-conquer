import React from 'react';
import TodoListContainer from './containers/TodoListContainer';
import TodoPost from './components/TodoPost';

const App: React.FC = () => {
  return (
    <div className="App">
      <TodoListContainer />
      <TodoPost />
    </div>
  );
}

export default App;
