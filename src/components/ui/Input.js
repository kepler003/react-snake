import joinClassNames from '../../utils/toClassName';
import cls from './Input.module.css';

export default function Input({ className, type = 'text', ...props }) {
  const classNames = joinClassNames(className, cls.input);
  return <input type={type} className={classNames} {...props} />;
}
