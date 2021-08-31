import React from 'react';
import { render, screen } from '@testing-library/react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';

import { mockFavorites } from '../../mockData'

import VideoDetail from 'components/VideoDetail/VideoDetail';
import GlobalProvider from 'store/global.provider';

const user = {
  id: '123',
  name: 'Wizeline',
  avatarUrl:
    'https://media.glassdoor.com/sqll/868055/wizeline-squarelogo-1473976610815.png',
};
const videoSelected = mockFavorites[1];
const favorite = true;


const history = createMemoryHistory();
const allProviders = ({ children }) => {
  return (
    <GlobalProvider>
      <Router history={history}>{children}</Router>
    </GlobalProvider>
  );
};

test('Test PlayDetail component', async () => {
  render(
    <VideoDetail video={{ user, videoSelected, favorite }} />,
    { wrapper: allProviders }
  );

  // Looking for elements
  const iFrame = screen.getByTitle('playVideo');
  expect(iFrame).toBeInTheDocument();

  const heading = screen.getByRole('heading', { level: 2 });
  expect(heading).toBeInTheDocument();

  const title = screen.getByTestId('title-detail');
  expect(title).toBeInTheDocument();

  const descrpition = screen.getByTestId('descrpition-detail');
  expect(descrpition).toBeInTheDocument();

});



