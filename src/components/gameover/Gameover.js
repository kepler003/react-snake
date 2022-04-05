import { useRef, useEffect, useContext } from 'react';
import { toClassName } from '../../utils/utils';
import asCard from '../hoc/asCard';
import Input from './../ui/Input';
import Button from './../ui/Button';
import cls from './Gameover.module.css';
import Context from '../../store/store';

function Gameover({ className, changeView }) {
  const ctx = useContext(Context);
  const inputRef = useRef();

  useEffect(() => {
    if (inputRef) {
      inputRef.current.focus();
    }
  }, [inputRef.current]);

  function save() {
    const name = inputRef.current.value;

    if (name.trim() === '') return;

    ctx.saveScore(name);
    ctx.reset();
    changeView('ranking');
  }

  function onMenuClickHandler() {
    ctx.reset();
    changeView('menu');
  }

  function onTryAgainClickHandler() {
    ctx.reset();
    changeView('game');
  }

  return (
    <div className={toClassName(className, cls.gameover)}>
      <h1>Your snake is #12</h1>
      <p>{ctx.length / 100}m</p>
      <Input placeholder='Your name' ref={inputRef} />
      <Button className={cls.saveBtn} theme='secondary' wide onClick={save}>
        Save
      </Button>
      <Button theme='secondary' wide onClick={onMenuClickHandler}>
        Menu
      </Button>
      <Button theme='secondary' wide onClick={onTryAgainClickHandler}>
        Try again
      </Button>
    </div>
  );
}

export default asCard(Gameover);
