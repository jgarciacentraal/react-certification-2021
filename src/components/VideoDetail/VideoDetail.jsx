import React from 'react';

import {
  VideoContainer,
  VideoInfoContainer,
  VideoTitle,
  VideoText,
  VideoiFrame,
} from './Styles';

export default function VideoDetail({ videoDetail }) {
  console.log('items', videoDetail);
  const { videoId } = videoDetail.video.id;
  const { title, description } = videoDetail.video.snippet;

  return (
    <>
      <VideoContainer>
        <VideoiFrame title="playVideo" src={`https://www.youtube.com/embed/${videoId}`} />
        <VideoInfoContainer>
          <VideoTitle data-testid={title}>{title}</VideoTitle>
          <VideoText>{description}</VideoText>
        </VideoInfoContainer>
      </VideoContainer>
    </>
  );
}
