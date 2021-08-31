import * as React from 'react';
import { render, screen } from '@testing-library/react';
import List from 'components/ListRelativeVideos/List';

import GlobalProvider from 'store/global.provider';
import { mockVideos } from '../../mockData';

const { items } = mockVideos;

const { videoId } = items[0].id;

describe('ListRelativeVideos Component ', () => {
  test('render', () => {
    render(
      <GlobalProvider>
        <List videoId={videoId} />
      </GlobalProvider>
    );

    const listCtn = screen.getByTestId('list-ctn');
    expect(listCtn).toBeInTheDocument();
  });
});
