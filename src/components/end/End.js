import { useRef, useEffect, useContext } from 'react';
import { joinClasses } from '../../utils/utils';
import Context from '../../store/store';
import asCard from '../hoc/asCard';
import Input from '../ui/Input';
import Button from '../ui/Button';
import cls from './End.module.css';

function End({ className, changeView }) {
  const ctx = useContext(Context);
  const inputRef = useRef();

  useEffect(() => {
    if (inputRef) {
      inputRef.current.focus();
    }
  }, [inputRef]);

  function onSubmitHandler(e) {
    e.preventDefault();
    const name = inputRef.current.value;

    if (name.trim() === '') return;

    ctx.saveScore(name);
    ctx.reset();
    changeView('ranking');
  }

  function onFocusHandler() {
    inputRef.current.select();
  }

  function onMenuClickHandler() {
    ctx.reset();
    changeView('menu');
  }

  function onTryAgainClickHandler() {
    ctx.reset();
    changeView('game');
  }

  const length = `${ctx.length / 100}m`;

  return (
    <div className={joinClasses(className, cls.ranking)}>
      <h1>Your snake has</h1>
      <p>{length}</p>
      <form onSubmit={onSubmitHandler}>
        <Input
          onFocus={onFocusHandler}
          placeholder={`What's your name?`}
          ref={inputRef}
        />
        <Button className={cls.saveBtn} type='submit' theme='primary' wide>
          Save
        </Button>
      </form>
      <Button onClick={onMenuClickHandler} theme='primary' wide>
        Menu
      </Button>
      <Button onClick={onTryAgainClickHandler} theme='primary' wide>
        Try again
      </Button>
    </div>
  );
}

export default asCard(End);
