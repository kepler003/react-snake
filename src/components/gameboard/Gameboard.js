import { useEffect, useState } from 'react';
import cls from './Gameboard.module.css';
import Snake from './Snake';
import Food from './Food';

export default function Gameboard() {
  const [snakeParts, setSnakeParts] = useState(null);
  const [food, setFood] = useState(null);

  // Place the food
  useEffect(() => {
    if (!snakeParts || food) return;
    placeFood();
  }, [snakeParts]);

  function handleOnMove(snakeParts) {
    setSnakeParts(snakeParts);
  }

  function placeFood() {
    let coords = null;

    do {
      const x = Math.floor(Math.random() * 21);
      const y = Math.floor(Math.random() * 21);

      const isInSnake = snakeParts.some((snakePart) => {
        return x === snakePart.x && y === snakePart.y;
      });

      if (!isInSnake) {
        coords = { x, y };
      }
    } while (!coords);

    setFood(coords);
  }

  return (
    <div className={cls.gameboard}>
      <Snake onMove={handleOnMove} />
      {food && <Food {...food} />}
    </div>
  );
}
