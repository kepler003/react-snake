import Background from './components/layout/Background';
import Main from './components/layout/Main';
import Gameboard from './components/gameboard/Gameboard';

function App() {
  return (
    <Background>
      <Main>
        <Gameboard />
      </Main>
    </Background>
  );
}

export default App;
