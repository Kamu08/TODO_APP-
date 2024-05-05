// Import action types
import {
  ADD_TODO,
  TOGGLE_TODO,
  REMOVE_TODO,
  MARK_COMPLETED,
  MARK_INCOMPLETE,
  FILTER_TODOS,
  MARK_ALL_COMPLETED,
  UPDATE_SEARCH_TERM,
  EDIT_TEXT
} from './actionTypes';

// Define the initial state of the application
const initialState = { todos: [], filter: 'ALL', searchTerm: '' };

// Reducer function responsible for managing the application state
const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    // Case for adding a new todo
    case ADD_TODO:
      return {
        // Add a new todo item with the provided text to the todos array
        todos: [...state.todos, { text: action.payload.text, completed: false }],
        // Retain the current filter and search term
        filter: state.filter,
        searchTerm: state.searchTerm,
      };

    // Case for toggling the completion status of a todo
    case TOGGLE_TODO:
      return {
        // Update the completion status of the todo with the specified id
        todos: state.todos.map((todo, index) =>
          index === action.payload.id ? { ...todo, completed: !todo.completed } : todo
        ),
        // Retain the current filter and search term
        filter: state.filter,
        searchTerm: state.searchTerm,
      };

    // Case for removing a todo
    case REMOVE_TODO:
      return {
        // Remove the todo with the specified id from the todos array
        todos: state.todos.filter((todo, index) => index !== action.payload.id),
        // Retain the current filter and search term
        filter: state.filter,
        searchTerm: state.searchTerm,
      };

    // Case for marking a todo as completed
    case MARK_COMPLETED:
      return {
        // Mark the todo with the specified id as completed
        todos: state.todos.map((todo, index) =>
          index === action.payload.id ? { ...todo, completed: true } : todo
        ),
        // Retain the current filter and search term
        filter: state.filter,
        searchTerm: state.searchTerm,
      };

    // Case for marking a todo as incomplete
    case MARK_INCOMPLETE:
      return {
        // Mark the todo with the specified id as incomplete
        todos: state.todos.map((todo, index) =>
          index === action.payload.id ? { ...todo, completed: false } : todo
        ),
        // Retain the current filter and search term
        filter: state.filter,
        searchTerm: state.searchTerm,
      };

    // Case for applying a filter to the todo list
    case FILTER_TODOS:
      return {
        // Retain the current todos array and update the filter
        todos: state.todos,
        filter: action.payload.filter,
        // Retain the current search term
        searchTerm: state.searchTerm,
      };

    // Case for updating the search term
    case UPDATE_SEARCH_TERM:
      return {
        // Retain the current todos array and filter
        todos: state.todos,
        filter: state.filter,
        // Update the search term
        searchTerm: action.payload.searchTerm,
      };

    // Case for marking all todos as completed
    case MARK_ALL_COMPLETED:
      return {
        // Mark all todos as completed
        todos: state.todos.map((todo) => ({ ...todo, completed: true })),
        // Retain the current filter and search term
        filter: state.filter,
        searchTerm: state.searchTerm,
      };

    // Case for editing a todo text
    case EDIT_TEXT:
      return {
        // Update the text of the todo with the specified id
        todos: state.todos.map((todo, index) =>
          index === action.payload.id ? { ...todo, text: action.payload.newText } : todo
        ),
        // Retain the current filter and search term
        filter: state.filter,
        searchTerm: state.searchTerm,
      };

    // Default case: return the current state if the action type is not recognized
    default:
      return state;
  }
};

export default todoReducer;
