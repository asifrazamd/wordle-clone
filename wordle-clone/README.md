# Wordle Clone

This is a **Wordle Clone** built with **React** and **TailwindCSS**. The goal of the game is to guess a 5-letter word within six attempts. Each guess provides feedback in the form of color-coded letters. Green represents a correct letter in the correct position, yellow indicates a correct letter in the wrong position, and gray signifies that the letter is not part of the word.

## Features

- **Word Guessing**: Players input guesses using their keyboard.
- **Feedback on Each Guess**:
  - **Green**: Correct letter in the correct position.
  - **Yellow**: Correct letter in the wrong position.
  - **Gray**: Letter is not in the word.
- **Animations**: Letters are animated based on feedback.
  - **Pulse Animation**: For correct and present letters.
  - **Shake Animation**: For absent letters.
- **Dark Mode Toggle**: Switch between dark and light mode.
- **New Game**: Start a new game anytime by clicking the 'New Game' button.

## Demo

You can play the Wordle Clone game here: https://wordle-clone-ipfb.vercel.app/ .

## Installation

Follow these steps to run the Wordle clone locally:

### 1. Clone the Repository

Clone the project to your local machine by running the following command in your terminal:

```bash
git clone https://github.com/asifrazamd/wordle-clone/tree/main


### 2. Navigate to the Project Folder


cd wordle-clone


### 3. Install Dependencies

npm install

### 4. Run the Project

npm start

This will start the app on http://localhost:5173 by default.

### 5. Open the Game

Open your browser and navigate to http://localhost:5173 to play the game.



Usage
Playing the Game
Make a Guess: Type a 5-letter word and press Enter. The app will check the guess and provide feedback.

Green: Letter is correct and in the right position.
Yellow: Letter is correct but in the wrong position.
Gray: Letter is not in the word.
Feedback: The feedback for each guess is shown in colored boxes with animations:

Green boxes have a pulse animation to indicate correctness.
Yellow boxes have a pulse animation to indicate the letter is in the word but in the wrong position.
Gray boxes use a shaking animation to show the letter is not in the word.
Dark Mode: Click the "Toggle Dark Mode" button to switch between light and dark themes. This feature enhances visibility, especially in low-light environments.

New Game: To start a new game, simply click the "New Game" button. The word will reset, and you'll have six new attempts.

Game Flow
Guess the Word: You have 6 attempts to guess the word.
Feedback: After each guess, you will see color-coded feedback indicating which letters are correct.
Win/Loss: If you guess the word correctly, you win. If you exhaust all 6 attempts without guessing the word, you lose, and the word will be revealed.


File Structure


src/
│
├── App.jsx                   # Main component that handles the game logic and UI.
├── components/
│   ├── Grid.jsx              # Displays the grid of guesses and current guess.
│   ├── Message.jsx           # Displays the message (e.g., "You won!" or "Game over").
│   ├── NewGameButton.jsx     # A button to start a new game.
│
├── utils/
│   └── checkGuess.jsx        # Utility function to check a guess against the solution.


App.jsx: The main application logic, which maintains game state like guesses, status, and feedback. It also handles key presses and toggles dark mode.
Grid.jsx: Displays the grid of guesses and the current word the user is typing.
Message.jsx: Displays game status messages (win or loss) after the game ends.
NewGameButton.jsx: Button to start a new game.
checkGuess.jsx: The utility function to compare the guessed word with the solution and return feedback.
Technologies Used
React: A JavaScript library for building user interfaces.
TailwindCSS: A utility-first CSS framework for fast and responsive design.
JavaScript (ES6+): The programming language used to handle game logic, state management, and DOM manipulation.
Dark Mode
The game includes a Dark Mode Toggle. By default, the app uses a light theme. Clicking the "Toggle Dark Mode" button will switch the theme to dark mode, making the app easier on the eyes in low-light conditions.

How to Use Dark Mode
Click on the "Toggle Dark Mode" button.
The app will switch between light and dark themes, preserving the theme choice until the page is refreshed.
Animations
The game includes simple animations to enhance the user experience:

Pulse Animation: Applied to correct (green) and present (yellow) letters.
Shake Animation: Applied to absent (gray) letters when a guess is incorrect.
These animations are achieved using TailwindCSS utility classes combined with React’s state management.

Future Enhancements
Word List Expansion: Add support for different word lengths and more word lists.
Leaderboard: Implement a scoreboard to track user performance.
Custom Word Selection: Allow players to choose their own word for the game.
Timer: Add a timer to make the game more challenging.

Acknowledgements
Inspired by the popular Wordle game.
TailwindCSS for efficient styling and responsive design.
React for building interactive user interfaces.


Contact
For any questions or suggestions, feel free to reach out to me at mdasifraza820@gmail.com.

