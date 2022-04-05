import cls from './asCard.module.css';
import { joinClasses } from './../../utils/utils';

export default function asCard(Component) {
  return ({ children, className, ...props }) => {
    return (
      <Component className={joinClasses(className, cls.card)} {...props}>
        {children}
      </Component>
    );
  };
}
