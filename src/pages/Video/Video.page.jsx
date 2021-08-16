import React from 'react';

import { VideoRow, VideoColumn, ListRow } from './Styles';

import VideoDetail from '../../components/VideoDetail/VideoDetail';
import List from '../../components/ListRelativeVideos/List';

export default function Video({ videoDetail }) {
  const { items } = videoDetail;
  return (
    <>
      <VideoRow>
        <VideoColumn>
          <VideoDetail videoDetail={videoDetail} />
        </VideoColumn>
        <ListRow>
          <List items={items} />
        </ListRow>
      </VideoRow>
    </>
  );
}
