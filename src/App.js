import { ContextProvider } from './store/store';
import Background from './components/layout/Background';
import Main from './components/layout/Main';
import Gameboard from './components/gameboard/Gameboard';
import Header from './components/header/Header';

function App() {
  return (
    <ContextProvider>
      <Background>
        <Main>
          <Header />
          <Gameboard />
        </Main>
      </Background>
    </ContextProvider>
  );
}

export default App;
