Connect4-p5js

A classic Connect 4 game built with p5.js — drop red and yellow discs into a 7×6 grid, line up four in a row to win!

⸻

📺 Live Demo

▶️ https://meskh.github.io/Connect4-p5js/

⸻

📂 Project Structure

Connect4-p5js/   
 └── README.md            # ← You’re here
  docs/   
    ├── index.html           # Entry point; loads p5.js and sketch.js
    ├── sketch.js            # Core game logic (board setup, draw loop, win checking)
    ├── Modak-Regular.otf    # Custom font for in-game text
    
⸻

🎮 How It Works
	•	Board Representation
A 2D array, board[7][6], holds "E" (empty), "R" (red), or "Y" (yellow).
	•	Rendering
	•	The blue board and circles are drawn in drawBoard().
	•	Hover effect highlights the column under the mouse (mouseHoverColumn()).
	•	Gameplay
	•	On mouseClicked(), if the game isn’t over, your click selects a column; the lowest empty cell fills with the current player’s color.
	•	fourConnected() scans rows, columns, and both diagonals for four in a row.
	•	Win & Turn Indicators
	•	When no winner: it draws the current player’s disc above the board and the text “Your Turn.”
	•	On win: it shows “! WINNER !” and highlights the winning player’s color.
	•	Responsive Canvas
	•	The board scales to windowHeight/10 per cell.
	•	windowResized() ensures the canvas and layout adapt to viewport changes.

⸻

🛠️ Built With
	•	p5.js v1.4.0
	•	JavaScript (ES6+)
	•	HTML5 

⸻

💭 Future Improvements
	•	Add multiplayer over WebSockets
	•	Highlight the exact four discs that win
	•	Mobile-friendly touch controls
	•	Customizable board sizes and win lengths

⸻

👤 Author

Alexander Meskhi
– GitHub: [meskh](https://github.com/Meskh)
– Linkedin: [Aleksandre Meskhi](https://www.linkedin.com/in/aleksandre-meskhi/)
