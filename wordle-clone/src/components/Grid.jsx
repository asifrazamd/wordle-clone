// src/components/Grid.jsx
import React from 'react';

function Grid({ guesses, currentGuess, status }) {
  // Calculate the number of empty rows to fill (up to 6 guesses)
  const emptyRows = Array(6 - guesses.length - (status === 'playing' ? 1 : 0)).fill('');

  return (
    <div className="grid grid-rows-6 gap-2">
      {/* Render each guess (row) */}
      {guesses.map((guess, rowIndex) => (
        <div key={rowIndex} className="flex gap-1">
          {/* Split the word into individual letters and display each with appropriate styling */}
          {guess.word.padEnd(5).split('').map((letter, i) => (
            <div
              key={i}
              className={`w-12 h-12 flex items-center justify-center text-xl font-bold border-2 
                ${guess.feedback[i] === 'correct' // Correct letters are marked green and pulsing
                  ? 'bg-green-500 text-white animate-pulse'
                  : guess.feedback[i] === 'present' // Present letters are marked yellow and pulsing
                  ? 'bg-yellow-500 text-white animate-pulse'
                  : guess.feedback[i] === 'absent' // Absent letters are marked gray and shaking
                  ? 'bg-gray-500 text-white animate-shake' // Adding shake animation for absent letters
                  : 'bg-gray-400 text-white' // Default state for unused letters (gray)
              } transition-all duration-300 ease-in-out`}  // Smooth transition for color changes
            >
              {letter.toUpperCase()} {/* Show the uppercase letter */}
            </div>
          ))}
        </div>
      ))}

      {/* Render current guess row if the game is still in progress and there are fewer than 6 guesses */}
      {status === 'playing' && guesses.length < 6 && (
        <div className="flex gap-1">
          {/* Display each letter in the current guess */}
          {currentGuess.padEnd(5).split('').map((letter, i) => (
            <div key={i} className="w-12 h-12 border-2 flex items-center justify-center text-xl font-bold">
              {letter.toUpperCase()} {/* Show the uppercase letter */}
            </div>
          ))}
        </div>
      )}

      {/* Render empty rows (for unguessed attempts) */}
      {emptyRows.map((_, rowIndex) => (
        <div key={rowIndex} className="flex gap-1">
          {/* Render 5 empty cells for each row */}
          {Array(5)
            .fill('') // Fill with empty cells for unguessed rows
            .map((_, i) => (
              <div key={i} className="w-12 h-12 border-2 border-gray-400"></div> // Empty cell with border
            ))}
        </div>
      ))}
    </div>
  );
}

export default Grid;
