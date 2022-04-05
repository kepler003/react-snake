import { useState } from 'react';
import { ContextProvider } from './store/store';
import Background from './components/layout/Background';
import Main from './components/layout/Main';
import Gameboard from './components/gameboard/Gameboard';
import Header from './components/header/Header';
import Menu from './components/menu/Menu';
import Gameover from './components/gameover/Gameover';
import Leaderboard from './components/leaderboard/Leaderboard';

function App() {
  const [view, setView] = useState('menu');

  const viewsMap = {
    menu: <Menu changeView={changeView} />,
    game: <Gameboard changeView={changeView} />,
    end: <Gameover changeView={changeView} />,
    ranking: <Leaderboard changeView={changeView} />,
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
