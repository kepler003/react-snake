import Block from './Block';
import cls from './Food.module.css';

export default function Food(props) {
  if (!props.x || !props.y) {
    return null;
  } else {
    return <Block className={cls.food} rounded='all' {...props} />;
  }
}
