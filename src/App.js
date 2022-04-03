import Background from './components/layout/Background';
import Main from './components/layout/Main';
import Gameboard from './components/gameboard/Gameboard';
import Header from './components/header/Header';

function App() {
  return (
    <Background>
      <Main>
        <Header />
        <Gameboard />
      </Main>
    </Background>
  );
}

export default App;
