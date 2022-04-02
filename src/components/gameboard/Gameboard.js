import cls from './Gameboard.module.css';
import Snake from './Snake';

export default function Gameboard() {
  return (
    <div className={cls.gameboard}>
      <Snake />
    </div>
  );
}
