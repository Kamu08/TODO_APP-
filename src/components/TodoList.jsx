import { useSelector } from "react-redux"; // Importing useSelector hook from react-redux to access state
import TodoItem from "./TodoItem"; // Importing TodoItem component

// Component representing the list of todos
const TodoList = () => {
  // Selecting filtered todos from the Redux store
  const filteredTodos = useSelector((state) => {
    const todos = state.todos; // Accessing todos from the state
    const filter = state.filter; // Accessing filter from the state
    const searchTerm = state.searchTerm.toLowerCase(); // Converting search term to lowercase for case-insensitive search

    // Filtering todos based on filter and search term
    return todos.filter((todo) => {
      const matchesFilter = (filter === 'COMPLETED' && todo.completed) || // Check if todo matches completed filter
        (filter === 'INCOMPLETE' && !todo.completed) || // Check if todo matches incomplete filter
        filter === 'ALL'; // If filter is set to ALL, include all todos

      const matchesSearch = todo.text.toLowerCase().includes(searchTerm); // Check if todo text includes search term

      return matchesFilter && matchesSearch; // Return true if todo matches both filter and search term
    });
  });

  console.log('Filtered Todos:', filteredTodos); // Log filtered todos to console

  // Rendering list of todos
  return (
    <ul>
      {/* Message for displaying all notes */}
      <li className="my-2 text-sm italic font-semibold">All Your Notes Here...</li>
      {/* Mapping through filtered todos and rendering TodoItem for each */}
      {filteredTodos.map((todo, index) => (
        <TodoItem key={index} todo={todo} index={index} /> // Render TodoItem component for each todo
      ))}
    </ul>
  );
};

export default TodoList; // Exporting TodoList component
