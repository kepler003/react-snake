import { toClassName } from '../../utils/utils';
import asCard from '../hoc/asCard';
import Button from '../ui/Button';
import cls from './Leaderboard.module.css';

function Leaderboard({ className, changeView }) {
  function onClick() {
    changeView('menu');
  }
  
  return (
    <div className={toClassName(className, cls.board)}>
      <h1>Leaderboard</h1>
      <ul>
        <li>
          <span>#1</span>
          <span>Name</span>
          <span>13.1m</span>
        </li>
        <li>
          <span>#2</span>
          <span>Name</span>
          <span>11.1m</span>
        </li>
        <li>
          <span>#3</span>
          <span>Name</span>
          <span>9.7m</span>
        </li>
        <li>
          <span>#4</span>
          <span>Name</span>
          <span>9.7m</span>
        </li>
        <li>
          <span>#5</span>
          <span>Name</span>
          <span>9.7m</span>
        </li>
        <li>
          <span>#5</span>
          <span>Name</span>
          <span>9.7m</span>
        </li>
        <li>
          <span>#5</span>
          <span>Name</span>
          <span>9.7m</span>
        </li>
        <li>
          <span>#5</span>
          <span>Name</span>
          <span>9.7m</span>
        </li>
        <li>
          <span>#5</span>
          <span>Name</span>
          <span>9.7m</span>
        </li>
      </ul>
      <Button theme='secondary' wide onClick={onClick}>Menu</Button>
    </div>
  );
}

export default asCard(Leaderboard);
