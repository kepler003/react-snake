import { createContext, useReducer, useState } from 'react';

const Context = createContext();

function ContextProvider({ children }) {
  const [length, setLength] = useState(30);
  const [ranking, setRanking] = useReducer(rankingReducer, []);

  function extend(length = 10) {
    setLength((prevLength) => prevLength + length);
  }

  function reset() {
    setLength(30);
  }

  function saveScore(name, score = length) {
    dispatchEvent({
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
