import React, { createContext, useContext, useReducer, useEffect } from 'react';

import { initialState, globalReducer } from './globalReducer';

const GlobalContext = createContext();

const useGlobalProvider = () => {
  const context = useContext(GlobalContext);
  if (!context) {
    throw new Error(`Can't use "useGlobal" without an GlobalProvider!`);
  }
  return context;
};

function GlobalProvider({ children }) {
  const [state, dispatch] = useReducer(globalReducer, initialState);

  useEffect(() => {
    window.localStorage.setItem('theme', state.themeValue);
  }, [state.themeValue]);

  return (
    <GlobalContext.Provider value={{ state, dispatch }}>
      {children}
    </GlobalContext.Provider>
  );
}

export { useGlobalProvider, GlobalContext };
export default GlobalProvider;