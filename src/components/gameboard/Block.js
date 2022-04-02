import cls from './Block.module.css';
import toClassName from './../../utils/toClassName';

export default function Block({
  className,
  size = 21,
  x,
  y,
}) {
  const classNames = toClassName(className, cls.block);
  const style = {
    width: `calc(100% / ${size})`,
    height: `calc(100% / ${size})`,
    transform: `translate(${100 * x}%, ${100 * y}%)`,
  };

  return <div className={classNames} style={style}></div>;
}
