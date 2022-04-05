import cls from './Button.module.css';
import { joinClasses } from '../../utils/utils';

export default function Button(props) {
  const { children, className, theme, size, wide, onClick, ...restProps } =
    props;

  const classNames = joinClasses(
    className,
    cls.btn,
    cls[theme],
    cls[size],
    wide ? cls.wide : ''
  );

  function onClickHandler(e) {
    e.target.blur();
    onClick && onClick(e);
  }

  return (
    <button className={classNames} onClick={onClickHandler} {...restProps}>
      {children}
    </button>
  );
}
