import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { VideoRow, VideoColumn } from './Styles';

import VideoDetail from '../../components/VideoDetail/VideoDetail';
import List from 'components/ListRelativeVideos/List';

import { useGlobalProvider } from '../../store/global.provider';
import { fetchVideos } from '../../store/globalActions';

export default function Video() {
  const matchParams = useParams();

  const {
    state: { videoList, videoSelected },
    dispatch,
  } = useGlobalProvider();

  const videoId = videoSelected ? videoSelected.id.videoId : null;

  useEffect(() => {
    if (!videoList?.items) {
      fetchVideos(dispatch, matchParams.id, true);
    }
  });

  if (!videoSelected) return <>Loading...</>;
  return (
    
      <VideoRow>
        <VideoColumn>
          <VideoDetail videoSelected={videoSelected} videoId={videoId} />
        </VideoColumn>
        
        <List videos={videoList} />
        
      </VideoRow>
    
  );
}
