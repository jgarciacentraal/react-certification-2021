import React, { useState } from 'react';

import { Card, VideoImagen, VideoDetails } from './Styles';

export default function ListVideos({ data }) {
  const [video, setVideo] = useState(false);
  const { items } = data.videos;
  
  return (
    <>
      {items && !video &&
        items.map((item) => (
          <Card 
            key={item.id.videoId} 
            data-testid="list-videos" 
            onClick={()=> setVideo(true)}
          >
            <VideoImagen 
              src={item.snippet.thumbnails.default.url} 
            />
            <VideoDetails>
              <h5>{item.snippet.title}</h5>
              <p>{item.snippet.description}</p>
            </VideoDetails>
          </Card>
        ))}
       {video}
    </>
  );
}
