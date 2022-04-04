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

  function reset() {
    setSnake({ length: 30 });
  }

  function addPlayer(name) {
    dispatchLeaderboard({
      type: 'add',
      name,
      score: snake.length,
    });
    reset();
  }

  const store = {
    snake: {
      ...snake,
      eat,
      reset,
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
      const newPlayer = {
        name: action.name,
        score: action.score,
        id: Math.random().toString(),
      };

      if (newLeaderboard.length === 0) {
        return [...newLeaderboard, newPlayer];
      } else {
        for (let i = 0; i < newLeaderboard.length; i++) {
          const player = newLeaderboard[i];
          if (player.score >= action.score) continue;
          newLeaderboard.splice(i, 0, newPlayer);
          return newLeaderboard;
        }

        return [...newLeaderboard, newPlayer];
      }
    }
  }
}

export { ContextProvider };
export default Context;
