import { useDispatch } from "react-redux"; // Importing useDispatch hook from react-redux for dispatching actions
import { useState } from "react"; // Importing useState hook from react for managing local component state
import {
  removeTodo, // Importing removeTodo action creator from ../redux/actions
  markCompleted, // Importing markCompleted action creator from ../redux/actions
  markIncomplete, // Importing markIncomplete action creator from ../redux/actions
  editText, // Importing editText action creator from ../redux/actions
} from "../redux/actions"; // Importing action creators from redux actions file
import {
  FaToggleOn, // Importing toggle on icon from react-icons/fa
  FaToggleOff, // Importing toggle off icon from react-icons/fa
  FaTrash, // Importing trash icon from react-icons/fa
  FaEdit, // Importing edit icon from react-icons/fa
  FaSave, // Importing save icon from react-icons/fa
} from "react-icons/fa"; // Importing font awesome icons

// Component representing a single todo item
const TodoItem = ({ todo, index }) => {
  const dispatch = useDispatch(); // Initializing dispatch function to dispatch actions

  // State to hold the edited text and editing mode
  const [editedText, setEditedText] = useState(todo.text); // State to hold the edited text, initialized with todo's text
  const [isEditing, setIsEditing] = useState(false); // State to track editing mode, initialized as false

  // Function to handle editing mode toggling
  const handleEdit = () => {
    if (isEditing) { // If currently in editing mode
      // Update editedText state with current input value
      setEditedText(document.getElementById(`todo-${index}`).value);
      // Dispatch editText action with updated text
      dispatch(editText(index, editedText));
    }
    // Toggle editing mode
    setIsEditing(!isEditing);
  };

  return (
    // Todo item container
    <li className='flex flex-col sm:flex-row sm:items-center justify-between border-b-2 py-2 gap-4'>
      {/* Todo item content */}
      <div className='flex items-center w-full'>
        {/* Todo index */}
        <span className='mr-4 text-gray-500'>{index + 1}.</span>
        {/* Render input field if editing mode is active */}
        {isEditing ? (
          <input
            id={`todo-${index}`}
            type='text'
            value={editedText}
            onChange={(e) => setEditedText(e.target.value)}
            className='mr-4 outline-none border-b-2 border-blue-500 w-full bg-transparent text-gray-800'
          />
        ) : (
          // Render todo text
          <span
            className={`mr-4 ${
              todo.completed ? "line-through text-gray-500" : "text-gray-800"
            }`}
          >
            {todo.text}
          </span>
        )}
      </div>
      {/* Todo item actions */}
      <div className='flex items-center space-x-3'>
        {/* Edit button */}
        <button
          className='text-sm px-3 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none'
          onClick={handleEdit}
        >
          {isEditing ? <FaSave /> : <FaEdit />}
        </button>
        {/* Remove button */}
        <button
          className='text-sm px-3 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 focus:outline-none'
          onClick={() => dispatch(removeTodo(index))}
        >
          <FaTrash />
        </button>
        {/* Mark completed button */}
        {!todo.completed && (
          <button
            className='text-sm px-3 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 focus:outline-none'
            onClick={() => dispatch(markCompleted(index))}
          >
            <FaToggleOn />
          </button>
        )}
        {/* Mark incomplete button */}
        {todo.completed && (
          <button
            className='text-sm px-3 py-2 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 focus:outline-none'
            onClick={() => dispatch(markIncomplete(index))}
          >
            <FaToggleOff />
          </button>
        )}
      </div>
    </li>
  );
};

export default TodoItem; // Exporting TodoItem component
