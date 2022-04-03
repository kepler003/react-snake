import { forwardRef } from 'react';
import joinClassNames from '../../utils/toClassName';
import cls from './Input.module.css';

export default forwardRef(({ className, type = 'text', ...props }, ref) => {
  function onFocusHandler() {
    ref.current.select();
  }

  return (
    <input
      type={type}
      className={joinClassNames(className, cls.input)}
      ref={ref}
      onFocus={onFocusHandler}
      {...props}
    />
  );
});
