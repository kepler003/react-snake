import Block from './Block';
import cls from './SnakePart.module.css';

export default function SnakePart({ index, snakeLength, ...props }) {
  const style = {
    filter: `brightness(${0.5 + 1.25 * (index / (snakeLength - 1))})`
  }
  return <Block className={cls.snakePart} style={style} {...props} />;
}
