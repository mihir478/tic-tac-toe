'use strict';

// cache selectors
const squares = document.querySelectorAll('.square');
const endGame = document.getElementById('endGame');
const resetButton = document.getElementById('reset');
let moveCount = 0;

// utilities
const show = element => element.style.display = 'block';
const hide = element => element.style.display = 'none';

// private
const _gameOver = () => {
  show(endGame);
  hide(resetButton);
}

// public
const hideEndGame = () => {
  hide(endGame);
}

const gameReset = () => {
  hideEndGame();
  hide(resetButton);
  // clear board
  [].forEach.call(squares, square => square.innerHTML = '');
  moveCount = 0;
}

const fillSquare = (index) => {
  const square = squares[index];
  // filled already
  if (square.innerHTML.length > 0) return;
  // assign X or O and record a move
  square.innerHTML = moveCount % 2 === 0 ? 'X' : 'O';
  moveCount++;
  // reset game condition
  if (moveCount === 1) {
    show(resetButton);
  }
  // game over check
  if (moveCount === 9) {
    _gameOver();
  }
}
