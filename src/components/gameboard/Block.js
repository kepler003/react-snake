import cls from './Block.module.css';
import toClassName from './../../utils/toClassName';

export default function Block({
  className,
  size = 'calc(100% / 21)',
  x,
  y,
}) {
  const classNames = toClassName(className, cls.block);
  const style = {
    width: size,
    height: size,
    transform: `translate(${100 * x}%, ${100 * y}%)`,
  };

  return <div className={classNames} style={style}></div>;
}
