import Block from './Block';
import cls from './SnakePart.module.css';

export default function SnakePart(props) {
  return <Block className={cls.snakePart} {...props} />;
}
