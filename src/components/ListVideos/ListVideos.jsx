import React, { useState } from 'react';

import { Card, VideoImagen, VideoDetails } from './Styles';

import VideoDetail from '../VideoDetail/VideoDetail';

export default function ListVideos({ data }) {
  const [video, setVideo] = useState(null); // conditional rendering
  const { items } = data.videos;

  return (
    <>
      {items && !video &&
        items.map((item) => (
          <Card
            key={item.id.videoId}
            data-testid="list-videos"
            onClick={() => setVideo(item)}
          >
            <VideoImagen src={item.snippet.thumbnails.medium.url} />
            <VideoDetails>
              <h5>{item.snippet.title}</h5>
              <p>{item.snippet.description}</p>
            </VideoDetails>
          </Card>
        ))}
        {video && <VideoDetail videoDetail={video} />}
    </>
  );
}
