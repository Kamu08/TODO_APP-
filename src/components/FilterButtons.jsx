import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { filterTodos, markAllCompleted } from '../redux/actions';

// Component responsible for rendering filter buttons and handling filter actions
const FilterButtons = () => {
  const dispatch = useDispatch(); // Initialize dispatch function to dispatch actions
  const currentFilter = useSelector((state) => state.filter); // Get current filter from the state

  // Function to handle filter selection
  const handleFilter = (filter) => {
    dispatch(filterTodos(filter)); // Dispatch filterTodos action with the selected filter
  };

  return (
    // Container for filter buttons
    <div className="flex items-center space-x-4">
      {/* Dropdown menu for selecting filter */}
      <select
        className="text-sm px-3 py-2 rounded border border-gray-300 focus:outline-none"
        value={currentFilter}
        onChange={(e) => handleFilter(e.target.value)}
      >
        {/* Option to display all todos */}
        <option value="ALL" className="text-gray-800">Default</option>
        {/* Option to display completed todos */}
        <option value="COMPLETED" className="text-green-600">Completed</option>
        {/* Option to display incomplete todos */}
        <option value="INCOMPLETE" className="text-red-600">Incomplete</option>
      </select>

      {/* Button to mark all todos as completed */}
      <button
        className="text-sm px-4 py-2 bg-purple-500 text-white rounded hover:bg-purple-600 focus:outline-none"
        onClick={() => dispatch(markAllCompleted())}
      >
        Mark All Completed
      </button>
    </div>
  );
};

export default FilterButtons;
