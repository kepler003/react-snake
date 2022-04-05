import { useRef, useEffect, useContext } from 'react';
import { toClassName } from '../../utils/utils';
import asCard from '../hoc/asCard';
import Input from '../ui/Input';
import Button from '../ui/Button';
import cls from './End.module.css';
import Context from '../../store/store';

function End({ className, changeView }) {
  const ctx = useContext(Context);
  const inputRef = useRef();

  useEffect(() => {
    if (inputRef) {
      inputRef.current.focus();
    }
  }, [inputRef.current]);

  function onSubmitHandler(e) {
    e.preventDefault();
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
    <div className={toClassName(className, cls.ranking)}>
      <h1>Your snake has</h1>
      <p>{ctx.length / 100}m</p>
      <form onSubmit={onSubmitHandler}>
        <Input placeholder='Your name' ref={inputRef} />
        <Button className={cls.saveBtn} type='submit' theme='secondary' wide>
          Save
        </Button>
      </form>
      <Button theme='secondary' wide onClick={onMenuClickHandler}>
        Menu
      </Button>
      <Button theme='secondary' wide onClick={onTryAgainClickHandler}>
        Try again
      </Button>
    </div>
  );
}

export default asCard(End);
