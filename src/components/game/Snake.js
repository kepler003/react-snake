import { useEffect, useState, useContext } from 'react';
import SnakePart from './SnakePart';
import { getRoundnessType } from '../../utils/utils';
import Context from '../../store/store';

export default function Snake({ onMove, onGameOver, food }) {
  const ctx = useContext(Context);
  const blockSize = 21;
  const speed = 10;
  let dir = 'up';
  let nextDir = 'up';
  const [timerID, setTimerID] = useState(null);
  const [snakeParts, setSnakeParts] = useState([
    {
      x: 10,
      y: 10,
    },
    {
      x: 10,
      y: 11,
    },
    {
      x: 10,
      y: 12,
      hidden: true,
    },
  ]);
  const [justAte, setJustAte] = useState(false);

  // Set up arrow key control
  useEffect(() => {
    document.addEventListener('keydown', onKeyUpHandler);
    return () => {
      document.removeEventListener('keydown', onKeyUpHandler);
    };
  }, []);

  // Move the snake
  useEffect(() => {
    setTimerID(
      setInterval(() => {
        move();
      }, 1000 / speed)
    );

    return () => clearInterval(timerID);
  }, []);

  // Lift up snake's position
  useEffect(() => {
    onMove(snakeParts);
  }, [snakeParts]);

  // Check if snake is on board or if it is eating itself
  useEffect(() => {
    if (checkIfIsEatingItself() || checkIfIsOnBoard()) {
      stop();
      onGameOver();
    }
  }, [snakeParts[0]]);

  // Prepare for next food
  useEffect(() => {
    setJustAte(false);
  }, [food]);

  // Eating food
  useEffect(() => {
    if (!food) return;
    if (justAte) return;

    const head = snakeParts[0];

    if (head.x === food.x && head.y === food.y) {
      setSnakeParts((prevParts) => {
        delete prevParts[prevParts.length - 1].hidden;
        return [...prevParts, { x: -1, y: -1, hidden: true }];
      });
      setJustAte(true);
      ctx.extend();
    }
  }, [food, snakeParts]);

  function move() {
    setSnakeParts((prevSnakeParts) => {
      let prevCoords = null;

      const newSnakeParts = prevSnakeParts.map((snakePart, i) => {
        const newCoords = { ...prevCoords };
        prevCoords = {
          x: snakePart.x,
          y: snakePart.y,
        };

        if (i === 0) {
          switch (nextDir) {
            case 'up':
              return { ...snakePart, y: snakePart.y - 1 };
            case 'down':
              return { ...snakePart, y: snakePart.y + 1 };
            case 'left':
              return { ...snakePart, x: snakePart.x - 1 };
            case 'right':
              return { ...snakePart, x: snakePart.x + 1 };
          }
        } else {
          return { ...snakePart, ...newCoords };
        }
      });

      dir = nextDir;
      return newSnakeParts;
    });
  }

  function stop() {
    clearTimeout(timerID);
  }

  function onKeyUpHandler(e) {
    const keyCodeMap = new Map([
      [37, 'left'],
      [38, 'up'],
      [39, 'right'],
      [40, 'down'],
    ]);

    if (!keyCodeMap.has(e.keyCode)) return;

    const newDir = keyCodeMap.get(e.keyCode);

    if (dir === 'up' && newDir === 'down') return;
    if (dir === 'down' && newDir === 'up') return;
    if (dir === 'left' && newDir === 'right') return;
    if (dir === 'right' && newDir === 'left') return;

    nextDir = newDir;
  }

  function checkIfIsOnBoard() {
    const { x, y } = snakeParts[0];
    return x < 0 || y < 0 || x > blockSize - 1 || y > blockSize - 1;
  }

  function checkIfIsEatingItself() {
    return snakeParts.some((snakePart, i) => {
      if (i === 0) return;
      if (i === snakeParts.length - 1) return;
      const head = snakeParts[0];
      return snakePart.x === head.x && snakePart.y === head.y;
    });
  }

  return (
    <>
      {snakeParts.map(({ x, y, hidden }, i) => {
        const rounded = getRoundnessType(x, y, i, snakeParts);
        return (
          !hidden && (
            <SnakePart
              key={i}
              index={i}
              snakeLength={snakeParts.length}
              rounded={rounded}
              x={x}
              y={y}
              size={blockSize}
            />
          )
        );
      })}
    </>
  );
}
