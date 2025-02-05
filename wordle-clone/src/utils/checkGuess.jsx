// src/utils/checkGuess.jsx
export function checkGuess(guess, solution) {
  // Convert the solution and guess into arrays of characters
  const solutionArray = solution.split('');  // Split the solution into an array of individual letters
  const guessArray = guess.split('');  // Split the guess into an array of individual letters

  // Initialize an array to store feedback for each letter in the guess
  // 'absent' means the letter is not in the solution, 'correct' and 'present' will be assigned later
  const feedback = Array(5).fill('absent'); 

  // Create an object to count the occurrences of each letter in the solution
  const solutionLetterCount = {};

  // Count occurrences of each letter in the solution
  solutionArray.forEach((letter) => {
    solutionLetterCount[letter] = (solutionLetterCount[letter] || 0) + 1;
  });

  // First pass: check if the letter in the guess is correct (matches the letter at the same index in the solution)
  guessArray.forEach((letter, index) => {
    // If the letter is in the correct position, mark it as 'correct' in the feedback array
    if (letter === solutionArray[index]) {
      feedback[index] = 'correct';  // Mark as correct
      solutionLetterCount[letter]--;  // Decrease the count of that letter in the solution
    }
  });

  // Second pass: check if the letter exists in the solution but is in the wrong position
  guessArray.forEach((letter, index) => {
    // If the letter is not marked as 'correct' and there are still occurrences of the letter in the solution
    if (feedback[index] !== 'correct' && solutionLetterCount[letter] > 0) {
      feedback[index] = 'present';  // Mark as present
      solutionLetterCount[letter]--;  // Decrease the count of that letter in the solution
    }
  });

  // Return the feedback array which shows the status of each letter in the guess ('correct', 'present', 'absent')
  return feedback;
}
