import { useContext } from 'react';
import { toClassName } from '../../utils/utils';
import Context from '../../store/store';
import cls from './Header.module.css';

export default function Header() {
  const ctx = useContext(Context);

  return (
    <header className={cls.header}>
      <div className={toClassName(cls.block, cls.best)}>
        <span className={cls.label}>longest</span>
        <span className={cls.value}>21.5m</span>
      </div>
      <div className={toClassName(cls.block, cls.your)}>
        <span className={cls.label}>length</span>
        <span className={cls.value}>{ctx.length / 100}m</span>
      </div>
    </header>
  );
}
