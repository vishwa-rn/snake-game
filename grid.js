const GRID_SIZE = 21;

export class Grid {
  static randomGridPosition() {
    return {
      x: Math.ceil(Math.random() * GRID_SIZE),
      y: Math.ceil(Math.random() * GRID_SIZE)
    };
  }

  static outsideGrid(position) {
    return (
      position.x < 1 ||
      position.x > GRID_SIZE ||
      position.y < 1 ||
      position.y > GRID_SIZE
    );
  }
}
