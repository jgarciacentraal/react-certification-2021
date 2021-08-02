import React from 'react';

import { Card, VideoImagen, VideoDetails } from './Styles';

export default function ListVideos({ data }) {
  
  const { videos } = data;

  return (
    <>
      {videos?.items && 
        videos?.items.map((item) => (
          <Card key={item.id.videoId} data-testid="list-videos">
            <VideoImagen src={item.snippet.thumbnails.default.url} />
            <VideoDetails>
              <h5>{item.snippet.title}</h5>
              <p>{item.snippet.description}</p>
            </VideoDetails>
          </Card>
      ))}
    </>
  );
}
