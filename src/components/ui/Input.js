import { useRef } from 'react';
import toClassName from '../../utils/utils';
import cls from './Input.module.css';

export default forwardRef((props, ref) => {
  const {
    type = 'text',
    className,
    selectOnFocus = false,
    ...restProps
  } = props;

  const inputRef = ref || useRef();

  function onFocusHandler() {
    if (selectOnFocus) {
      inputRef.current.select();
    }
  }

  return (
    <input
      type={type}
      className={toClassName(className, cls.input)}
      ref={inputRef}
      onFocus={onFocusHandler}
      {...restProps}
    />
  );
});
