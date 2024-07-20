import React from 'react';

import TaskInput from './components/TaskInput';
import TaskList from './components/TaskList';
import './Style.css';

const App = () => {
  return (



    <div className="task-container">
      <TaskInput />
      <TaskList />
    </div>


  );
};

export default App;
