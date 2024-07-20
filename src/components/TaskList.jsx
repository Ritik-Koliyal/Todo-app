// Import necessary dependencies and components
import React from 'react';
import { useSelector } from 'react-redux';
import TaskItem from '../components/Taskitem';
import '../Style.css';

// TaskList component definition
const TaskList = () => {
  const tasks = useSelector(state => state.tasks); // Access tasks from the Redux store using useSelector
  const completedTasks = tasks.filter(task => task.completed); // Filter tasks to get only completed tasks
  const pendingTasks = tasks.filter(task => !task.completed); // Filter tasks to get only pending tasks

  return (
    <div className="task-list">
      <div className="pending-tasks">
        {pendingTasks.map(task => (
          <TaskItem key={task.id} task={task} /> // Render TaskItem component for each pending task
        ))}
      </div>
      <div className="completed-tasks">
        <h2>Completed</h2> {/* Heading for completed tasks */}
        {completedTasks.map(task => (
          <TaskItem key={task.id} task={task} /> // Render TaskItem component for each completed task
        ))}
      </div>
    </div>
  );
};

export default TaskList;
