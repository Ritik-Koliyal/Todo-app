// Define the initial state for the Redux store
const initialState = {
  tasks: JSON.parse(localStorage.getItem("tasks")) || [], // Initialize tasks from localStorage or as an empty array
};

// rootReducer function to handle actions and update the state
function rootReducer(state = initialState, action) {
  switch (action.type) {
    case "ADD_TASK":
      // Add a new task to the state and update localStorage
      const newTasks = [...state.tasks, action.payload];
      localStorage.setItem("tasks", JSON.stringify(newTasks));
      return {
        ...state,
        tasks: newTasks,
      };

    case "TOGGLE_TASK":
      // Toggle the completion status of a task and update localStorage
      const updatedTasks = state.tasks.map((task) =>
        task.id === action.payload
          ? { ...task, completed: !task.completed }
          : task
      );
      localStorage.setItem("tasks", JSON.stringify(updatedTasks));
      return {
        ...state,
        tasks: updatedTasks,
      };

    case "DELETE_TASK":
      // Delete a task from the state and update localStorage
      const filteredTasks = state.tasks.filter(
        (task) => task.id !== action.payload
      );
      localStorage.setItem("tasks", JSON.stringify(filteredTasks));
      return {
        ...state,
        tasks: filteredTasks,
      };

    case "EDIT_TASK":
      // Edit a task in the state and update localStorage
      const editedTasks = state.tasks.map((t) =>
        t.id === action.payload.id ? action.payload : t
      );
      localStorage.setItem("tasks", JSON.stringify(editedTasks));
      return {
        ...state,
        tasks: editedTasks,
      };

    default:
      return state; // Return the current state if action type doesn't match any case
  }
}

export default rootReducer;
