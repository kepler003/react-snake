import { useEffect, useState } from 'react';
import SnakePart from './SnakePart';

export default function Snake() {
  const speed = 10;
  let dir = 'up';
  let nextDir = 'up';
  let timerID = null;
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
    },
  ]);

  // Move the snake
  useEffect(() => {
    timerID = setInterval(() => {
      move();
    }, 1000 / speed);

    return () => clearInterval(timerID);
  }, []);

  // Set up arrow key control
  useEffect(() => {
    document.addEventListener('keydown', handleKeyControl);
    return () => {
      document.removeEventListener('keydown', handleKeyControl);
    };
  }, []);

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

  return (
    <>
      {snakeParts.map(({ x, y }) => {
        const key = '' + x + y;
        return <SnakePart key={key} x={x} y={y} />;
      })}
    </>
  );
}
