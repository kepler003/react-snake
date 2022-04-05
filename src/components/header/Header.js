import { useContext } from 'react';
import { joinClasses } from '../../utils/utils';
import Context from '../../store/store';
import cls from './Header.module.css';

export default function Header() {
  const ctx = useContext(Context);

  const longest = ctx.ranking[0]?.score / 100 || 0;
  const length = ctx.length / 100;

  return (
    <header className={cls.header}>
      <div className={joinClasses(cls.block, cls.best)}>
        <span className={cls.label}>longest</span>
        <span className={cls.value}>{longest}m</span>
      </div>
      <div className={joinClasses(cls.block, cls.your)}>
        <span className={cls.label}>length</span>
        <span className={cls.value}>{length}m</span>
      </div>
    </header>
  );
}
