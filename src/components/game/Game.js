import { useEffect, useState } from 'react';
import { toClassName } from '../../utils/utils';
import asCard from '../hoc/asCard';
import Snake from './Snake';
import Food from './Food';
import cls from './Game.module.css';

function Game({ className, changeView }) {
  const [snakeParts, setSnakeParts] = useState(null);
  const [food, setFood] = useState(null);

  return (
    <div className={toClassName(className, cls.game)}>
      <Snake
        food={food}
        onMove={setSnakeParts}
        onGameOver={() => changeView('end')}
      />
      <Food snakeParts={snakeParts} onSpawn={setFood} />
    </div>
  );
}

export default asCard(Game);
