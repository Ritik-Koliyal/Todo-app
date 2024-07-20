// Import necessary dependencies and components
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../redux/action';
import '../Style.css';

// TaskInput component definition
const TaskInput = () => {
  const [task, setTask] = useState(''); // State to manage the task text input
  const [date, setDate] = useState(''); // State to manage the date input
  const dispatch = useDispatch(); // Initialize dispatch to send actions to the Redux store

  // Handler to add a new task
  const handleAddTask = () => {
    if (!date) { // Check if date is not selected
      alert('Please select a date.'); // Alert user to select a date
    }
    if (task.trim() && date) { // Check if task text is not empty and date is selected
      dispatch(addTask({ // Dispatch addTask action with the new task details
        id: Date.now(), // Generate a unique id based on current timestamp
        text: task, // Task text
        date, // Task date
        completed: false // Set initial completion status to false
      }));
      setTask(''); // Clear the task input
      setDate(''); // Clear the date input
    }
  };

  return (
    <div className='input-container'>
      <h1>Todo App</h1>
      <div className="task-input">
        <textarea
          type="text"
          value={task} // Bind task state to textarea value
          onChange={(e) => setTask(e.target.value)} // Update task state on change
          placeholder="Add A Task" // Placeholder text
          className='input-box-task'
        />
        <input
          type="date"
          value={date} // Bind date state to input value
          onChange={(e) => setDate(e.target.value)} // Update date state on change
          className='date-input'
        />
        <button className='add-button' onClick={handleAddTask}>ADD TASK</button> {/* Button to add the task */}
      </div>
      <h2>Your task is here</h2> {/* Placeholder for displaying added tasks */}
    </div>
  );
};

export default TaskInput;
