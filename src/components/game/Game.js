import { useEffect, useState } from 'react';
import { toClassName } from '../../utils/utils';
import asCard from '../hoc/asCard';
import Snake from './Snake';
import Food from './Food';
import cls from './Game.module.css';

function Game({ className, changeView }) {
  const [snakeParts, setSnakeParts] = useState(null);
  const [food, setFood] = useState(null);
  const [eatCtr, setEatCtr] = useState(0);

  // Placing the food
  useEffect(() => {
    if (food || !snakeParts) return;
    placeFood();
  }, [snakeParts]);

  // Eating food
  useEffect(() => {
    if (!food || !snakeParts) return;
    if (!checkIfAteFood()) return;
    setEatCtr((prevCtr) => prevCtr + 1);
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

  function checkIfAteFood() {
    const head = snakeParts[0];
    return head.x === food.x && head.y === food.y;
  }

  function onGameOverHandler() {
    changeView('end');
  }

  return (
    <div className={toClassName(className, cls.gameboard)}>
      <Snake
        eatCtr={eatCtr}
        onMove={handleOnMove}
        onGameOver={onGameOverHandler}
      />
      {food && <Food {...food} />}
    </div>
  );
}

export default asCard(Game);
