import Block from './Block';
import cls from './Food.module.css';

export default function Food(props) {
  if (props.x === null || props.y === null) {
    return null;
  } else {
    return <Block className={cls.food} rounded='all' {...props} />;
  }
}
