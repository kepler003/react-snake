import cls from './Background.module.css';

export default function Background({ children }) {
  return <div className={cls.background}>{children}</div>;
}
