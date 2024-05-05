// localStorage.js

// Function to load state from local storage
export const loadState = () => {
    try {
      const serializedState = localStorage.getItem('state');
      if (serializedState === null) {
        return undefined; // Return undefined if no state is found in local storage
      }
      return JSON.parse(serializedState); // Deserialize the serialized state
    } catch (error) {
      console.error('Error loading state from local storage:', error);
      return undefined; // Return undefined if there's an error loading state
    }
  };
  
  // Function to save state to local storage
  export const saveState = (state) => {
    try {
      const serializedState = JSON.stringify(state); // Serialize the state
      localStorage.setItem('state', serializedState); // Save the serialized state to local storage
    } catch (error) {
      console.error('Error saving state to local storage:', error);
      // You can handle the error here, e.g., logging, displaying a message to the user, etc.
    }
  };
  