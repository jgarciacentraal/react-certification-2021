import React from 'react';

import {
  VideoContainer,
  VideoInfoContainer,
  VideoTitle,
  VideoText,
  VideoiFrame,
} from './Styles';

export default function VideoDetail({ videoSelected, videoId }) {
  const { title, description } = videoSelected.snippet;

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
