// src/components/NewGameButton.jsx
import React from 'react';

function NewGameButton({ onClick }) {
  return (
    // A button component to start a new game, it receives an onClick function as a prop
    <button
      type="button"  // Ensure the button is not treated as a submit button (default type)
      onClick={onClick}  // Trigger the onClick function passed from the parent component when clicked
      className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"  // TailwindCSS styling for the button
    >
      New Game  {/* Button text */}
    </button>
  );
}

export default NewGameButton;
