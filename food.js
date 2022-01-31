import { onSnake, expandSnake } from "./snake";
import { Grid } from "./grid";

let food = Grid.randomGridPosition();
const EXPANSION_RATE = 1;

export function update() {
  if (onSnake(food)) {
    expandSnake(EXPANSION_RATE);
    food = Grid.randomGridPosition();
  }
}

export function draw(gameBoard) {
  const foodElement = document.createElement("div");
  foodElement.style.gridRowStart = food.y;
  foodElement.style.gridColumnStart = food.x;
  foodElement.classList.add("food");
  gameBoard.appendChild(foodElement);
}

export function getRandomFood() {
  let newFoodPosition;
  while (newFoodPosition == null || onSnake(newFoodPosition)) {
    newFoodPosition = Grid.randomGridPosition();
  }
}

export function setColor() {}
