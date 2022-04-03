import { createContext, useReducer, useState } from 'react';

const Context = createContext();

function ContextProvider({ children }) {
  const [snake, setSnake] = useState({ length: 30 });
  const [leaderboard, dispatchLeaderboard] = useReducer(leaderboardReducer, []);

  function eat() {
    setSnake((prevSnake) => ({
      ...prevSnake,
      length: prevSnake.length + 10,
    }));
  }

  function addPlayer(name) {
    dispatchLeaderboard({ type: 'add', name, score: snake.length });
  }

  const store = {
    snake: {
      ...snake,
      eat,
    },
    leaderboard: {
      list: leaderboard,
      addPlayer,
    },
  };

  return <Context.Provider value={store}>{children}</Context.Provider>;
}

function leaderboardReducer(leaderboard, action) {
  switch (action.type) {
    case 'add': {
      const newLeaderboard = [...leaderboard];

      for (const [player, i] of newLeaderboard) {
        if (player.score >= action.score) continue;
        return newLeaderboard.splice(i, 0, {
          name: action.name,
          score: action.score,
        });
      }
    }
  }
}

export { ContextProvider };
export default Context;
