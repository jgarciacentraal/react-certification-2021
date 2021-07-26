import React from 'react'

import { Card, VideoImagen, VideoDetails } from './Styles'

export default function ListVideos(props) {
  const { items } = props.data;
  return (
    <>
        {items.map((item) =>
          <Card key={item.snippet.channelId}>
              <VideoImagen src={item.snippet.thumbnails.medium.url}/>
              <VideoDetails>
                <h5>{item.snippet.title}</h5>
                <p>{item.snippet.description}</p>
              </VideoDetails>
              
          </Card>
        )}
    </>
    
  )
}


