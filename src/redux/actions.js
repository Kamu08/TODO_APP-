// Importing action type constants from the actionTypes module
import {
  ADD_TODO,
  TOGGLE_TODO,
  REMOVE_TODO,
  MARK_COMPLETED,
  MARK_INCOMPLETE,
  FILTER_TODOS,
  MARK_ALL_COMPLETED,
  UPDATE_SEARCH_TERM,
  EDIT_TEXT // New action type for editing text
} from './actionTypes';

// Action creator function to add a new todo item
export const addTodo = (text) => ({
  type: ADD_TODO, // Action type
  payload: { text }, // Payload containing the text of the new todo item
});

// Action creator function to toggle the completion status of a todo item
export const toggleTodo = (id) => ({
  type: TOGGLE_TODO, // Action type
  payload: { id }, // Payload containing the ID of the todo item to toggle
});

// Action creator function to remove a todo item
export const removeTodo = (id) => ({
  type: REMOVE_TODO, // Action type
  payload: { id }, // Payload containing the ID of the todo item to remove
});

// Action creator function to mark a todo item as completed
export const markCompleted = (id) => ({
  type: MARK_COMPLETED, // Action type
  payload: { id }, // Payload containing the ID of the todo item to mark as completed
});

// Action creator function to mark a todo item as incomplete
export const markIncomplete = (id) => ({
  type: MARK_INCOMPLETE, // Action type
  payload: { id }, // Payload containing the ID of the todo item to mark as incomplete
});

// Action creator function to edit the text of a todo item
export const editText = (id, newText) => ({
  type: EDIT_TEXT, // Action type
  payload: { id, newText }, // Payload containing the ID of the todo item and the new text
});

// Action creator function to filter todo items based on a filter value
export const filterTodos = (filter) => ({
  type: FILTER_TODOS, // Action type
  payload: { filter }, // Payload containing the filter value
});

// Action creator function to mark all todo items as completed
export const markAllCompleted = () => ({
  type: MARK_ALL_COMPLETED, // Action type
});

// Action creator function to update the search term for filtering todo items
export const updateSearchTerm = (searchTerm) => ({
  type: UPDATE_SEARCH_TERM, // Action type
  payload: { searchTerm }, // Payload containing the new search term
});
