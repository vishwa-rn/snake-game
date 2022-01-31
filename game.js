import {
  SNAKE_SPEED,
  update as updateSnake,
  draw as drawSnake,
  getSnakeHead,
  snakeIntersection
} from "./snake";
import { update as updateFood, draw as drawFood } from "./food";
import { Grid } from "./grid";

let lastRenderTime = 0;
let gameOver = false;
const gameBoard = document.getElementById("game-board");

function main(currentTime) {
  if (gameOver) {
    if (window.confirm("You lost. Press ok to restart")) {
      window.location = "/";
    }
    return;
  }
  window.requestAnimationFrame(main);
  const secondsSinceLastRender = (currentTime - lastRenderTime) / 1000;
  if (secondsSinceLastRender < 1 / SNAKE_SPEED) return;
  lastRenderTime = currentTime;

  update();
  draw();
}

// Update our snake and food
function update() {
  updateSnake();
  updateFood();
  checkDeath();
}

// Draw our snake and food
function draw() {
  gameBoard.innerHTML = "";
  drawSnake(gameBoard);
  drawFood(gameBoard);
}

function checkDeath() {
  gameOver = Grid.outsideGrid(getSnakeHead()) || snakeIntersection();
}

window.requestAnimationFrame(main);
