import { useContext } from 'react';
import Context from '../../store/store';
import { toClassName } from '../../utils/utils';
import asCard from '../hoc/asCard';
import Button from '../ui/Button';
import cls from './Ranking.module.css';

function Ranking({ className, changeView }) {
  const ctx = useContext(Context);

  function onClick() {
    changeView('menu');
  }

  return (
    <div className={toClassName(className, cls.board)}>
      <h1>Leaderboard</h1>
      {ctx.ranking.length === 0 && (
        <p className={cls.noPlayers}>No players... yet!</p>
      )}
      {ctx.ranking.length !== 0 && (
        <ul>
          {ctx.ranking.map(({ name, score, id }, i) => {
            return (
              <li key={id} dataid={id}>
                <span>#{i + 1}</span>
                <span>{name}</span>
                <span>{score / 100}m</span>
              </li>
            );
          })}
        </ul>
      )}
      <Button className={cls.menuBtn} onClick={onClick} theme='secondary' wide>
        Menu
      </Button>
    </div>
  );
}

export default asCard(Ranking);
