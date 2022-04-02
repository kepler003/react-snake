import Block from './Block';
import cls from './Food.module.css';

export default function Food(props) {
  return <Block className={cls.food} {...props} />;
}
