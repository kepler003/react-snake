import { toClassName } from '../../utils/utils';
import asCard from './../hoc/asCard';
import Button from './../ui/Button';
import cls from './Menu.module.css';

function Menu({ className, changeView }) {
  function play() {
    changeView('board');
  }

  return (
    <div className={toClassName(className, cls.menu)}>
      <h1>SNAKE</h1>
      <Button theme='secondary'>Leaderboard</Button>
      <Button theme='secondary' onClick={play}>
        Play
      </Button>
    </div>
  );
}

export default asCard(Menu);
