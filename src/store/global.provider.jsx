import React, { createContext, useContext, useReducer, useEffect } from 'react';

import { initialState, globalReducer } from './globalReducer';
import { AUTH_STORAGE_KEY, THEME_STORAGE, VIDEOS_STORAGE } from '../utils/constants';

export const GlobalContext = createContext();

export const useGlobalProvider = () => {
  const context = useContext(GlobalContext);
  if (!context) {
    throw new Error(`Can't use "useGlobal" without an GlobalProvider!`);
  }
  return context;
};

// for user
function UserInit(state) {
  return {
    ...state,
    user: window.localStorage.getItem(AUTH_STORAGE_KEY),
  };
}

export default function GlobalProvider({ children }) {
  const [state, dispatch] = useReducer(globalReducer, initialState, UserInit);

  const { themeValue, favoriteVideos } = state;

  useEffect(() => {
    window.localStorage.setItem(THEME_STORAGE, themeValue);
  }, [themeValue]);

  useEffect(() => {
    if (state.user) {
      window.localStorage.setItem(AUTH_STORAGE_KEY, JSON.stringify(state.user));
    } else {
      window.localStorage.removeItem(AUTH_STORAGE_KEY);
    }
  }, [state.user]);

  useEffect(() => {
    window.localStorage.setItem(VIDEOS_STORAGE, JSON.stringify(favoriteVideos));
  }, [favoriteVideos]);

  return (
    <GlobalContext.Provider value={{ state, dispatch }}>
      {children}
    </GlobalContext.Provider>
  );
}
