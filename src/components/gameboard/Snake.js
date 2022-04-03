import { useEffect, useState } from 'react';
import SnakePart from './SnakePart';
import { getRelativeDir } from '../../utils/utils';

export default function Snake({ onMove, eatCtr }) {
  const size = 21;
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

  // Move the snake
  useEffect(() => {
    setTimerID(
      setInterval(() => {
        move();
      }, 1000 / speed)
    );

    return () => clearInterval(timerID);
  }, []);

  // Set up arrow key control
  useEffect(() => {
    document.addEventListener('keydown', handleKeyControl);
    return () => {
      document.removeEventListener('keydown', handleKeyControl);
    };
  }, []);

  // Check if snake is on board & if it ate itself
  useEffect(() => {
    if (checkIfAteItself() || checkIfOnBoard()) {
      stop();
    }
  }, [snakeParts[0].x, snakeParts[0].y]);

  // Lift up the snake position
  useEffect(() => {
    onMove(snakeParts);
  }, [snakeParts]);

  // Increase length after eating
  useEffect(() => {
    if (eatCtr === 0) return;
    setSnakeParts((prevParts) => {
      delete prevParts[prevParts.length - 1].hidden;
      return [...prevParts, { x: -1, y: -1, hidden: true }];
    });
  }, [eatCtr]);

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
          switch (dir) {
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

  function handleKeyControl(e) {
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

  function checkIfOnBoard() {
    const { x, y } = snakeParts[0];
    return x < 0 || y < 0 || x > size - 1 || y > size - 1;
  }

  function checkIfAteItself() {
    return snakeParts.some((snakePart, i) => {
      if (i === 0) return;
      const head = snakeParts[0];
      return snakePart.x === head.x && snakePart.y === head.y;
    });
  }

  return (
    <>
      {snakeParts.map(({ x, y, hidden }, i) => {
        let rounded = null;

        if (i === 0) {
          const nextSnakePart = snakeParts[i + 1];
          if (x - 1 === nextSnakePart.x) rounded = 'right';
          if (x + 1 === nextSnakePart.x) rounded = 'left';
          if (y - 1 === nextSnakePart.y) rounded = 'bottom';
          if (y + 1 === nextSnakePart.y) rounded = 'top';
        } else if (i === snakeParts.length - 2) {
          const prevSnakePart = snakeParts[i - 1];
          if (x - 1 === prevSnakePart.x) rounded = 'right';
          if (x + 1 === prevSnakePart.x) rounded = 'left';
          if (y - 1 === prevSnakePart.y) rounded = 'bottom';
          if (y + 1 === prevSnakePart.y) rounded = 'top';
        } else if (i !== snakeParts.length - 1) {
          const prevSnakePart = snakeParts[i - 1];
          const nextSnakePart = snakeParts[i + 1];

          const prevRelCoords = {
            x: prevSnakePart.x - x,
            y: prevSnakePart.y - y,
          };
          const nextRelCoords = {
            x: nextSnakePart.x - x,
            y: nextSnakePart.y - y,
          };

          const prevDir = getRelativeDir(prevRelCoords.x, prevRelCoords.y);
          const nextDir = getRelativeDir(nextRelCoords.x, nextRelCoords.y);

          if (
            (prevDir === 'up' && nextDir === 'left') ||
            (prevDir === 'left' && nextDir === 'up')
          ) {
            rounded = 'bottom right';
          } else if (
            (prevDir === 'up' && nextDir === 'right') ||
            (prevDir === 'right' && nextDir === 'up')
          ) {
            rounded = 'bottom left';
          } else if (
            (prevDir === 'down' && nextDir === 'right') ||
            (prevDir === 'right' && nextDir === 'down')
          ) {
            rounded = 'top left';
          } else if (
            (prevDir === 'down' && nextDir === 'left') ||
            (prevDir === 'left' && nextDir === 'down')
          ) {
            rounded = 'top right';
          }
        }

        return (
          !hidden && (
            <SnakePart key={i} rounded={rounded} x={x} y={y} size={size} />
          )
        );
      })}
    </>
  );
}
