import * as React from 'react';

import {render, screen} from '@testing-library/react'
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';

import VideoCard from 'components/VideoCard/VideoCard';
import GlobalProvider from 'store/global.provider';

import { mockFavorites } from '../../mockData'

const history = createMemoryHistory();
const allProviders = ({ children }) => {
  return (
    <GlobalProvider>
      <Router history={history}>{children}</Router>
    </GlobalProvider>
  );
};


test('all video card in viewss', () => {
  render(
    <VideoCard 
      key={mockFavorites[0].videoId}
      data={mockFavorites[0]}
    />,
    { wrapper: allProviders }
  )

  const cardE = screen.getByTestId('list-videos');
  expect(cardE).toBeInTheDocument();

  const titleE = screen.getByTestId('title-card-video');
  expect(titleE).toBeInTheDocument();

  const imagen = screen.getByRole('img');
  expect(imagen).toBeInTheDocument();

})