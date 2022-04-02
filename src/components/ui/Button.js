import cls from './Button.module.css';
import { toClassName } from '../../utils/utils';

export default function Button({ children, className, theme, size, ...props }) {
  const classNames = toClassName(className, cls.btn, cls[theme], cls[size]);
  return (
    <button className={classNames} {...props}>
      {children}
    </button>
  );
}
