// Import necessary dependencies and components
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { editTask } from '../redux/action';
import '../Style.css';

// EditTaskModal component definition
const EditTaskModal = ({ task, closeModal }) => {
  const [newTaskText, setNewTaskText] = useState(task.text); // Initialize state with the current task text
  const dispatch = useDispatch(); // Initialize dispatch to send actions to the Redux store

  // Handler to edit the task
  const handleEditTask = () => {
    dispatch(editTask({ ...task, text: newTaskText })); // Dispatch editTask action with the updated task text
    closeModal(); // Close the modal after saving the changes
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <h2>Edit Task</h2> {/* Heading for the modal */}
        <input
          type="text"
          value={newTaskText} // Bind newTaskText state to input value
          onChange={(e) => setNewTaskText(e.target.value)} // Update newTaskText state on change
        />
        <button onClick={handleEditTask}>Save</button> {/* Button to save the edited task */}
        <button onClick={closeModal}>Cancel</button> {/* Button to cancel editing and close the modal */}
      </div>
    </div>
  );
};

export default EditTaskModal;
