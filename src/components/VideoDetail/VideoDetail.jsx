import React from 'react'

import { VideoiFrame, VideoDetails, Title, Paragraph } from './Styles';

export default function VideoDetail({ videoId, videoDetail }) {

  const { title, description } = videoDetail;

  return (
    <>
      <VideoiFrame title="playVideo" src={`https://www.youtube.com/embed/${videoId}`} />
      <VideoDetails>
        <Title>{title}</Title>
      </VideoDetails>
      <Paragraph data-testid="paragraph">{description}</Paragraph>
    </>
  )
}

