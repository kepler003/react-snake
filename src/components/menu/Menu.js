import { joinClasses } from '../../utils/utils';
import asCard from './../hoc/asCard';
import Button from './../ui/Button';
import cls from './Menu.module.css';

function Menu({ className, changeView }) {
  return (
    <div className={joinClasses(className, cls.menu)}>
      <h1>SNAKE</h1>
      <Button theme='primary' onClick={() => changeView('ranking')}>
        Leaderboard
      </Button>
      <Button theme='primary' onClick={() => changeView('game')}>
        Play
      </Button>
    </div>
  );
}

export default asCard(Menu);
