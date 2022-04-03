import { createContext, useState } from 'react';

const Context = createContext();

function ContextProvider({ children }) {
  const [snake, setSnake] = useState({ length: 30 });

  function eat() {
    setSnake((prevSnake) => ({
      ...prevSnake,
      length: prevSnake.length + 10,
    }));
  }

  const store = {
    snake: {
      ...snake,
      eat,
    },
  };

  return <Context.Provider value={store}>{children}</Context.Provider>;
}

export { ContextProvider };
export default Context;
