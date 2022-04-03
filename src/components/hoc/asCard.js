import cls from './asCard.module.css';
import { toClassName } from './../../utils/utils';

export default function asCard(Component) {
  return ({ children, className, ...props }) => {
    return (
      <Component className={toClassName(className, cls.card)} {...props}>
        {children}
      </Component>
    );
  };
}
