import React from 'react';

import { GridContainer } from './Styles'

import VideoDetail from '../../components/VideoDetail/VideoDetail'
//import List from '../../components/'

export default function Video({ videoDetail }) {
  return (
    //<div>Que vergas!!</div>
    <>
    <GridContainer>
    
        <VideoDetail videoDetail={videoDetail} />
      
    
      
      
    </GridContainer>
    </>
  );
}

