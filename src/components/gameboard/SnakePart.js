import Block from './Block';
import cls from './SnakePart.module.css';
import toClassName from './../../utils/toClassName';

export default function SnakePart({ rounded, ...props }) {
  let classNames = toClassName(cls.snakePart);

  switch (rounded) {
    case 'top':
      classNames = toClassName(classNames, cls.roundedTop);
      break;
    case 'bottom':
      classNames = toClassName(classNames, cls.roundedBottom);
      break;
    case 'left':
      classNames = toClassName(classNames, cls.roundedLeft);
      break;
    case 'right':
      classNames = toClassName(classNames, cls.roundedRight);
      break;
    case 'top left':
      classNames = toClassName(classNames, cls.roundedTopLeft);
      break;
    case 'top right':
      classNames = toClassName(classNames, cls.roundedTopRight);
      break;
    case 'bottom left':
      classNames = toClassName(classNames, cls.roundedBottomLeft);
      break;
    case 'bottom right':
      classNames = toClassName(classNames, cls.roundedBottomRight);
      break;
  }

  return <Block className={classNames} {...props} />;
}
