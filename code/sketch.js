let windowCentre;
let boardWidth = 80;
let board = [[]];
let currentPlayer = ""; // first to start
let winner = "";
let font;

function preload() {
  font = loadFont("Modak-Regular.otf")
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  windowCentre = {"x":windowWidth/2, "y":windowHeight/2}
  board = createEmptyBoardArray();
  boardWidth = windowHeight / 10
  let players = ["R", "Y"]
  currentPlayer = players[int(random(2))]
  
}

function draw() {
  background(20);
  drawBoard(boardWidth);
  mouseHoverColumn(boardWidth);
  winner = fourConnected()

  
}


function createEmptyBoardArray() {
  let board = [[]]
  for (let x = 0; x < 7; x++) {
    for (let y = 0; y < 6; y++) {
      board[x].push("E"); //stands for empty
    }
    board.push([])
  }
  return board;
}

function drawBoard(width) {
  push();
  translate(windowCentre.x-width * 7 / 2, windowCentre.y-width * 6 / 2);
  noStroke();
  fill(20, 20, 205);
  rect(0, 0, width * 7, width * 6, width / 5);
  for (let x = 0; x < 7; x++) {
    for (let y = 0; y < 6; y++) {
      if (board[x][5 - y] == "E") {
        fill(20) 
      } else if (board[x][5 - y] == "R") {
        fill(205, 20, 20)
      } else {
        fill(205, 205, 20)
      }
      circle(x * width + width / 2, y * width + width / 2, width * 0.7)
    }
  }

  
  
  if (winner == "E") { // game not ended show current player
    if (currentPlayer == "R") {fill(205, 20, 20)} else {fill(205, 205, 20)}
    textSize(width * 0.8);
    circle(width, - width, width * 0.8);
    circle(width * 6, - width, width * 0.8);
    textAlign(CENTER, CENTER)
    textFont(font);
    text("Your Turn", width * 3.5, -width * 1.17)
  } else { // game ended show winner
    if (winner == "R") {fill(205, 20, 20)} else {fill(205, 205, 20)}
    circle(width, -width, width * 0.8);
    circle(width * 6, - width, width * 0.8);
    textSize(width * 0.7);
    textAlign(CENTER, CENTER)
    textFont(font);
    text("! WINNER !", width * 3.5, -width * 1.17)
  }
  

  pop();
  resetButton(width);
}


function mouseHoverColumn(width) {
  push();
  
  translate(windowCentre.x - width * 7 / 2, windowCentre.y - width * 6 / 2);
  noStroke();
  fill(205, 205, 205, 20);
  if (mouseX > windowCentre.x - width * 7 / 2 && mouseX < windowCentre.x + width * 7 / 2 && mouseY < windowCentre.y + width * 6 / 2) {
    // mouse column hover effect
    let column = int((mouseX - (windowCentre.x - width * 7 / 2)) / width);
    rect(column * width, 0, width, width * 6, width / 5)
    
    
  }
  pop();
}

function fourConnected() {
  // checking rows
  let current = ""
  let occurances = 0
  for (let row = 0; row < 6; row++) {
    for (let x = 0; x < 7; x++) {
      if (current == board[x][row]) {occurances += 1} else {occurances = 0}
      if (current == "E") {occurances = 0}
      current = board[x][row]
      if (occurances == 3) {return current}
    }
  }
  // checking columns
  current = ""
  occurances = 0
  for (let column = 0; column < 7; column++) {
    for (let y = 0; y < 6; y++) {
      if (current == board[column][y]) {occurances += 1} else {occurances = 0}
      if (current == "E") {occurances = 0}
      current = board[column][y]
      if (occurances == 3) {return current}
    }
  }
  // checking diagonals
  current = "E"
  for (let row = 0; row < 6; row++) {
    for (let column = 0; column < 7; column++) {
      current = board[column][row]
      if (current != "E") {
        if (row <= 2 && column <= 3) {
          if (board[row+1][column+1] == current &&
              board[row+2][column+2] == current &&
              board[row+3][column+3] == current) {
                    
              return current
          }
        }
        if (row >= 3 && column <= 3) {
          if (board[row-1][column+1] == current &&
              board[row-2][column+2] == current &&
              board[row-3][column+3] == current) {
                    
              return current
          }
        }
      }
    }
  }

  return "E"
}

function resetButton(width) {
  push();
  translate(windowCentre.x - width * 7 / 2, windowCentre.y + width * 6 / 2);
  noStroke();
  fill(20, 20, 205);
  rect(width, width / 2, width * 5, width, width / 5);
  if (mouseX > windowCentre.x - width * 2.5 && mouseX < windowCentre.x + width * 2.5 && mouseY > windowCentre.y + width * 3.5 && mouseY < windowCentre.y + width * 4.5) {
    fill(205, 205, 205, 30)
    rect(width, width / 2, width * 5, width, width / 5);
  }
  textSize(width * 0.8)
  fill(20)
  textAlign(CENTER, CENTER)
  textFont(font);
  text("Reset", width * 7 / 2, width * 0.87)
  pop();
}

function mouseClicked() {
  if (winner == "E") {
    push();
    let width = boardWidth
    translate(windowCentre.x - width * 7 / 2, windowCentre.y - width * 6 / 2);
    noStroke();
    if (mouseX > windowCentre.x - width * 7 / 2 && mouseX < windowCentre.x + width * 7 / 2 && mouseY < windowCentre.y + width * 6 / 2) {
      let column = int((mouseX - (windowCentre.x - width * 7 / 2)) / width);
      for (let y = 0; y < 6; y++) {
        if (board[column][y] == "E") {
          board[column][y] = currentPlayer;
          if (currentPlayer == "R") {currentPlayer = "Y"} else {currentPlayer = "R"}
          break
        }
      }
    }
    pop();
  }
  if (mouseX > windowCentre.x - boardWidth * 2.5 && mouseX < windowCentre.x + boardWidth * 2.5 && mouseY > windowCentre.y + boardWidth * 3.5 && mouseY < windowCentre.y + boardWidth * 4.5) {
    board = createEmptyBoardArray()
    winner = "E"
    console.log("reset")
    let players = ["R", "Y"]
    currentPlayer = players[int(random(2))]
  }
}
function windowResized() {
  resizeCanvas(windowWidth, windowHeight)
  boardWidth = windowHeight / 10
  windowCentre = {"x":windowWidth/2, "y":windowHeight/2}

}


