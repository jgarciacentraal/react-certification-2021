import React from 'react';

import { ListContainer, ListImg, ListDetail } from './Styles';

export default function List({ items }) {
  console.log(items);

  return (
    <>
      {items &&
        items.map((video) => (
          <ListContainer key={video.id.videoId}>
            <ListImg src={video.snippet.thumbnails.medium.url} alt="wizeline.jpg" />
            <ListDetail>
              <h5>{video.snippet.title}</h5>
            </ListDetail>
          </ListContainer>
        ))}
    </>
  );
}
