import { useEffect, useState } from 'react';
import { toClassName } from '../../utils/utils';
import asCard from '../hoc/asCard';
import Snake from './Snake';
import Food from './Food';
import cls from './Game.module.css';

function Game({ className, changeView }) {
  const [snakeParts, setSnakeParts] = useState(null);
  const [food, setFood] = useState(null);

  // Placing the food
  useEffect(() => {
    if (food || !snakeParts) return;
    addFood();
  }, [food, snakeParts]);

  // Eating food
  useEffect(() => {
    if (!food || !snakeParts) return;
    if (!checkIfIsEating()) return;
    removeFood();
  }, [snakeParts]);

  function addFood() {
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

  function removeFood() {
    setFood(null);
  }

  function checkIfIsEating() {
    const head = snakeParts[0];
    return head.x === food.x && head.y === food.y;
  }

  function onMoveHandler(snakeParts) {
    setSnakeParts(snakeParts);
  }

  function onGameOverHandler() {
    changeView('end');
  }

  return (
    <div className={toClassName(className, cls.game)}>
      <Snake onMove={onMoveHandler} onGameOver={onGameOverHandler} />
      <Food {...food} />
    </div>
  );
}

export default asCard(Game);
