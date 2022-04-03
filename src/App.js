import { useState } from 'react';
import { ContextProvider } from './store/store';
import Background from './components/layout/Background';
import Main from './components/layout/Main';
import Gameboard from './components/gameboard/Gameboard';
import Header from './components/header/Header';
import Menu from './components/menu/Menu';

function App() {
  const [view, setView] = useState('menu');

  function play() {
    setView('game');
  }

  const viewsMap = {
    menu: <Menu onPlay={play} />,
    game: <Gameboard />,
  };

  return (
    <ContextProvider>
      <Background>
        <Main>
          <Header />
          {viewsMap[view]}
        </Main>
      </Background>
    </ContextProvider>
  );
}

export default App;
