import cls from './Block.module.css';
import toClassName from './../../utils/toClassName';

export default function Block({ className, size = 21, x, y, rounded }) {
  const roundedClassNamesMap = {
    rounded: cls.rounded,
    top: cls.roundedTop,
    bottom: cls.roundedBottom,
    left: cls.roundedLeft,
    right: cls.roundedRight,
    'top left': cls.roundedTopLeft,
    'top right': cls.roundedTopRight,
    'bottom left': cls.roundedBottomLeft,
    'bottom right': cls.roundedBottomRight,
  };

  const classNames = toClassName(
    className,
    cls.block,
    roundedClassNamesMap[rounded]
  );

  const style = {
    width: `calc(100% / ${size})`,
    height: `calc(100% / ${size})`,
    transform: `translate(${100 * x}%, ${100 * y}%)`,
  };

  return <div className={classNames} style={style}></div>;
}
