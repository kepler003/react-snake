import cls from './Header.module.css';
import { toClassName } from '../../utils/utils';

export default function Header() {
  return (
    <header className={cls.header}>
      <div className={toClassName(cls.block, cls.best)}>
        <span className={cls.label}>longest</span>
        <span className={cls.value}>21.5m</span>
      </div>
      <div className={toClassName(cls.block, cls.your)}>
        <span className={cls.label}>length</span>
        <span className={cls.value}>10.2m</span>
      </div>
    </header>
  );
}
