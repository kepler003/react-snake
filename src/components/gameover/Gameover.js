import { useRef, useEffect } from 'react';
import { toClassName } from '../../utils/utils';
import asCard from '../hoc/asCard';
import Input from './../ui/Input';
import Button from './../ui/Button';
import cls from './Gameover.module.css';

function Gameover({ className }) {
  const inputRef = useRef();

  useEffect(() => {
    if (inputRef) {
      inputRef.current.focus();
    }
  }, [inputRef.current]);
  
  return (
    <div className={toClassName(className, cls.gameover)}>
      <h1>Your snake reached</h1>
      <p>25.5m</p>
      <Input placeholder='Your name' ref={inputRef} />
      <Button className={cls.saveBtn} theme='secondary' wide>Save</Button>
      <Button theme='secondary' wide>Menu</Button>
      <Button theme='secondary' wide>Try again</Button>
    </div>
  );
}

export default asCard(Gameover);
