import { useState } from 'react';
import { ContextProvider } from './store/store';
import Background from './components/layout/Background';
import Main from './components/layout/Main';
import Game from './components/game/Game';
import Header from './components/header/Header';
import Menu from './components/menu/Menu';
import End from './components/end/End';
import Ranking from './components/ranking/Ranking';

function App() {
  const [view, setView] = useState('menu');

  const viewsMap = {
    menu: <Menu changeView={changeView} />,
    game: <Game changeView={changeView} />,
    end: <End changeView={changeView} />,
    ranking: <Ranking changeView={changeView} />,
  };

  function changeView(view) {
    if (!Object.keys(viewsMap).includes(view)) {
      throw new Error(`No view named ${view}`);
    }

    setView(view);
  }

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
