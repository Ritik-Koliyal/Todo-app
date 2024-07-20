// Import necessary dependencies and components
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { toggleTask, deleteTask } from '../redux/action';
import EditTaskModal from '../components/EditTaskModel';
import '../Style.css';

// TaskItem component definition
const TaskItem = ({ task }) => {
  const dispatch = useDispatch(); // Initialize dispatch to send actions to the Redux store
  const [isEditModalOpen, setIsEditModalOpen] = useState(false); // State to manage the visibility of the edit modal

  // Handler to toggle task completion status
  const handleToggleCompletion = () => {
    dispatch(toggleTask(task.id)); // Dispatch toggleTask action with the task id
  };

  // Handler to delete a task
  const handleDeleteTask = () => {
    dispatch(deleteTask(task.id)); // Dispatch deleteTask action with the task id
  };

  // Handler to open the edit modal
  const handleEditTask = () => {
    setIsEditModalOpen(true); // Set the edit modal state to true to open it
  };

  return (
    <div className={`task-item ${task.completed ? 'completed' : ''}`}>
      <div>
        <input
          type="checkbox"
          checked={task.completed} // Checkbox reflects the completion status of the task
          onChange={handleToggleCompletion} // Call handleToggleCompletion on checkbox change
          className='chekbox'
        />
        <span>{task.text}</span> {/* Display task text */}
      </div>
      <div><span>{task.date}</span></div> {/* Display task date */}
      <div className="icons">
        <button onClick={handleEditTask}>Edit</button> {/* Button to open edit modal */}
        <button onClick={handleDeleteTask}>Delete</button> {/* Button to delete task */}
      </div>
      {isEditModalOpen && (
        <EditTaskModal
          task={task} // Pass the task to the EditTaskModal component
          closeModal={() => setIsEditModalOpen(false)} // Function to close the modal
        />
      )}
    </div>
  );
};

export default TaskItem;
