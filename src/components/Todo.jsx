import React, { useState } from "react";
import { useDispatch } from "react-redux";
import TodoList from "./TodoList";
import FilterButtons from "./FilterButtons";
import { BsSearch } from "react-icons/bs";
import { addTodo, updateSearchTerm } from "../redux/actions";

// Component for managing todos
const Todo = () => {
  const dispatch = useDispatch();
  const [newTodoText, setNewTodoText] = useState(""); // State for holding new todo text
  const [searchTerm, setSearchTerm] = useState(""); // State for holding search term

  // Function to handle adding a new todo
  const handleAddTodo = (text) => {
    dispatch(addTodo(text)); // Dispatch addTodo action with the new todo text
  };

  // Function to handle clicking on the add todo button
  const handleAddTodoClick = () => {
    if (newTodoText.trim() !== "") {
      handleAddTodo(newTodoText.trim()); // Call handleAddTodo function with trimmed text
      setNewTodoText(""); // Clear the input field
    }
  };

  // Function to handle search input change
  const handleSearchChange = (value) => {
    setSearchTerm(value); // Update search term state
    dispatch(updateSearchTerm(value)); // Dispatch updateSearchTerm action with the new search term
  };

  return (
    // Container for todo app
    <div className='bg-gradient-to-br from-gray-600 to-gray-800 min-h-screen flex justify-center items-center'>
      {/* Main content area */}
      <div className='max-w-4xl mx-auto  p-4 bg-gradient-to-br from-[#dddddd] to-[#d4dfed] rounded-lg shadow-lg'>
        {/* Title */}
        <h2 className='mt-3 mb-6 text-2xl font-bold text-center uppercase'>
          Manage your Todo's {"  "} QuadB Tech
        </h2>

        {/* Add todo input */}
        <div className='flex items-center mb-4'>
          <input
            id='addTodoInput'
            className='flex-grow p-3 border-b-2 border-gray-300 focus:outline-none focus:border-gray-500 rounded-s-lg text-gray-800'
            type='text'
            placeholder='Add Todo'
            value={newTodoText}
            onChange={(e) => setNewTodoText(e.target.value)} // Update new todo text state
          />
          <button
            className=' px-4 py-3 bg-blue-500 text-white rounded-e-lg hover:bg-blue-600 focus:outline-none'
            onClick={handleAddTodoClick} // Call handleAddTodoClick function on button click
          >
            Add
          </button>
        </div>

        {/* Filter and search input */}
        <div className='flex flex-col sm:flex-row items-center justify-between gap-4'>
          {/* Filter buttons */}
          <FilterButtons />

          {/* Search input */}
          <div className='flex items-center mb-4'>
            <input
              className='flex-grow p-2 border-b-2 border-gray-300 focus:outline-none focus:border-blue-500 rounded-s-lg text-gray-800'
              type='text'
              placeholder='Search Todos'
              value={searchTerm}
              onChange={(e) => handleSearchChange(e.target.value)} // Call handleSearchChange function on input change
            />
            <button className=' p-2.5 bg-blue-500 text-white rounded-e-lg hover:bg-blue-600 focus:outline-none'>
              <BsSearch size={20} />
            </button>
          </div>
        </div>

        {/* Todo list */}
        <TodoList />
      </div>
    </div>
  );
};

export default Todo;
