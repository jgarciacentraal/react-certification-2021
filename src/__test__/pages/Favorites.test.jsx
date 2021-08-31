import React, { useReducer } from 'react';
import { render, screen } from '@testing-library/react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';

import { GlobalContext } from 'store/global.provider';
import { globalReducer } from 'store/GlobalReducer';
import Favorites from 'pages/Favorites/FavoritesPage';
import { mockFavorites } from '../../mockData';


describe('Testing Favorite page', () => {
  const history = createMemoryHistory();
  history.push('/favorites');
  const initialState = {
    favoriteVideos: mockFavorites,
    user: {
      id: '123',
      name: 'Wizeline',
      avatarUrl:
        'https://media.glassdoor.com/sqll/868055/wizeline-squarelogo-1473976610815.png',
    },
  };

  function GlobalProvider({ children }) {
    const [state, dispatch] = useReducer(globalReducer, initialState);

    return (
      <GlobalContext.Provider value={{ state, dispatch }}>
        {children}
      </GlobalContext.Provider>
    );
  }

  const allProviders = ({ children }) => {
    return (
      <GlobalProvider>
        <Router history={history}>{children}</Router>
      </GlobalProvider>
    );
  };

  it('Looking for elements ', async () => {
    render(<Favorites />, {
      wrapper: allProviders,
    });

    const sectionElement = screen.getByTestId("section-favorites")
    expect(sectionElement).toBeInTheDocument();

  });

  it('show videos', () => {
    render(<Favorites />, {
      wrapper: allProviders,
    });

    const mockFav = jest.fn();
    [1].map(x => mockFav(x));
    expect(mockFav).toBeCalledWith(expect.anything());

  })
});
