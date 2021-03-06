import { forwardRef } from 'react';
import { joinClasses } from '../../utils/utils';
import cls from './Input.module.css';

export default forwardRef((props, ref) => {
  const { type = 'text', className, ...restProps } = props;

  return (
    <input
      type={type}
      className={joinClasses(className, cls.input)}
      ref={ref}
      {...restProps}
    />
  );
});
