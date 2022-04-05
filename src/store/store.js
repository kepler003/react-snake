import { createContext, useReducer, useState, useEffect } from 'react';

const Context = createContext();

function ContextProvider({ children }) {
  const snakeStorage = JSON.parse(localStorage.getItem('snake'));
  const [length, setLength] = useState(snakeStorage?.length || 30);
  const [ranking, dispatchRanking] = useReducer(
    rankingReducer,
    snakeStorage?.ranking || []
  );

  // Save to localStorage
  useEffect(() => {
    localStorage.setItem('snake', JSON.stringify({ length, ranking }));
  }, [length, ranking]);

  function extend(length = 10) {
    setLength((prevLength) => prevLength + length);
  }

  function reset() {
    setLength(30);
  }

  function saveScore(name, score = length) {
    dispatchRanking({
      type: 'save',
      name,
      score,
    });
  }

  const store = {
    length,
    ranking,
    extend,
    reset,
    saveScore,
  };

  return <Context.Provider value={store}>{children}</Context.Provider>;
}

function rankingReducer(ranking, action) {
  switch (action.type) {
    case 'save': {
      const newRanking = [...ranking];

      const newPlayer = {
        name: action.name,
        score: action.score,
        id: Math.random().toString(),
      };

      if (newRanking.length !== 0) {
        for (const [i, player] of newRanking.entries()) {
          if (player.score >= action.score) continue;
          newRanking.splice(i, 0, newPlayer);
          return newRanking;
        }
      }

      return [...newRanking, newPlayer];
    }
  }
}

export { ContextProvider };
export default Context;
