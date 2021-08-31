import * as React from 'react';
import {render, screen} from '@testing-library/react'
import List from 'components/ListRelativeVideos/List';

import { mockVideos } from '../../mockData';

const {items} = mockVideos;

const {videoId} = items[0].id


import GlobalProvider from 'store/global.provider';

describe('ListRelativeVideos Component ', () => {
  
  test('render' , () => {
    render(
      <GlobalProvider>
        < List videoId={videoId} />
      </GlobalProvider>
    )

    const listCtn = screen.getByTestId('list-ctn')
    expect(listCtn).toBeInTheDocument()

  }) 

})