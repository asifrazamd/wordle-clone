// src/App.jsx
import React, { useState, useEffect, useCallback } from 'react';
import Grid from './components/Grid';
import Message from './components/Message';
import NewGameButton from './components/NewGameButton';
import { checkGuess } from './utils/checkGuess';

// Fixed word to be guessed
const solution = 'PAVAN'; 

function App() {
  // State for tracking guesses, current guess, game status, and messages
  const [guesses, setGuesses] = useState([]); // Array to store guesses
  const [currentGuess, setCurrentGuess] = useState(''); // The current guess being typed
  const [status, setStatus] = useState('playing'); // Tracks game status (playing, won, lost)
  const [message, setMessage] = useState(''); // Message to display based on game status
  const [isDarkMode, setIsDarkMode] = useState(false); // State to toggle between light and dark mode

  // Handles key press events for the game (Enter, Backspace, letters)
  const handleKeyPress = useCallback(
    (key) => {
      if (status !== 'playing') return; // Don't do anything if game isn't ongoing

      if (key === 'Enter' && currentGuess.length === 5) {
        // If Enter is pressed and guess has 5 letters, check guess
        const feedback = checkGuess(currentGuess.toUpperCase(), solution); // Compare guess with the solution

        // Add the guess and its feedback to the list of guesses
        const newGuesses = [...guesses, { word: currentGuess.toUpperCase(), feedback }];
        setGuesses(newGuesses); // Update guesses state
        setCurrentGuess(''); // Reset current guess

        // Check if the guess is correct
        if (currentGuess.toUpperCase() === solution) {
          setStatus('won'); // Game won if guess is correct
          setMessage('🎉 Congratulations! You guessed the word!');
        } else if (newGuesses.length === 6) {
          setStatus('lost'); // Game lost if maximum guesses are reached
          setMessage(`😢 The word was: ${solution}`);
        }
      } else if (key === 'Backspace') {
        // If Backspace is pressed, remove last character from current guess
        setCurrentGuess((prev) => prev.slice(0, -1));
      } else if (/^[a-zA-Z]$/.test(key) && currentGuess.length < 5) {
        // If a valid letter is pressed and guess is not full, append the letter to current guess
        setCurrentGuess((prev) => prev + key.toUpperCase()); // Add the letter in uppercase
      }
    },
    [currentGuess, guesses, status] // Dependencies for useCallback: currentGuess, guesses, and status
  );

  // Resets the game by reloading the page (new game)
  const handleNewGame = () => {
    window.location.reload(); // Refresh the page to start a new game
  };

  // Toggle dark mode between light and dark theme
  const toggleDarkMode = () => {
    setIsDarkMode((prev) => !prev); // Toggle the dark mode state
  };

  // Add event listener for keydown events when the component is mounted, and remove it when unmounted
  useEffect(() => {
    const handleKeyDown = (e) => handleKeyPress(e.key); // Call handleKeyPress when a key is pressed
    window.addEventListener('keydown', handleKeyDown); // Attach the event listener
    return () => window.removeEventListener('keydown', handleKeyDown); // Clean up the event listener
  }, [handleKeyPress]); // Only reattach the event listener when handleKeyPress changes

  return (
    // Apply dark or light theme based on isDarkMode state
    <div className={`min-h-screen ${isDarkMode ? 'bg-gray-800 text-white' : 'bg-gray-100 text-black'} flex flex-col items-center justify-center p-4`}>
      <h1 className="text-4xl font-bold mb-4">Wordle Clone</h1>
      <Grid guesses={guesses} currentGuess={currentGuess} status={status} /> {/* Grid component displaying guesses */}
      <Message message={message} /> {/* Message component displaying game status */}
      <NewGameButton onClick={handleNewGame} /> {/* Button to start a new game */}
      
      {/* Button to toggle dark mode */}
      <button
        onClick={toggleDarkMode}  // Toggle dark mode state
        className="mt-4 px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-700"
      >
        Toggle Dark Mode
      </button>
    </div>
  );
}

export default App;
