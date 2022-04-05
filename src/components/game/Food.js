import { useEffect, useState } from 'react';
import Block from './Block';
import cls from './Food.module.css';

export default function Food({ snakeParts, onSpawn }) {
  const [pos, setPos] = useState(null);

  // Spawn food
  useEffect(() => {
    if (!pos && snakeParts) {
      spawnFood();
    }
  }, [pos, snakeParts]);

  // Lift food position up
  useEffect(() => {
    if (pos) {
      onSpawn(pos);
    }
  }, [pos]);

  // Check if snake is eating food
  useEffect(() => {
    if (checkIfIsEaten()) {
      spawnFood();
    }
  }, [snakeParts]);

  function spawnFood() {
    let pos = null;

    do {
      const x = Math.floor(Math.random() * 21);
      const y = Math.floor(Math.random() * 21);

      const isInSnake = snakeParts?.some((snakePart) => {
        return x === snakePart.x && y === snakePart.y;
      });

      if (!isInSnake) {
        pos = { x, y };
      }
    } while (!pos);

    setPos(pos);
  }

  function checkIfIsEaten() {
    const head = snakeParts?.[0];
    return head?.x === pos?.x && head?.y === pos?.y;
  }

  return (
    pos && <Block className={cls.food} rounded='all' x={pos?.x} y={pos?.y} />
  );
}
