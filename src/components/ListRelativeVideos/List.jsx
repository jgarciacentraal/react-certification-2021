import React, {Fragment} from 'react';
import Divider from '@material-ui/core/Divider';

import { ListContainer, ListVideoItem, ListImg, ListDetail } from './Styles';

export default function List({ videos }) {
  const {items}  = videos;

  function handleOnClick(video) {
    console.log('video', video)
  }

  

  return (
    
    <ListContainer>
      {items &&
        items.map((video) => (
          <Fragment key={video.id.videoId}>
            <ListVideoItem onClick={() => handleOnClick(video)}>
              <ListImg src={video.snippet.thumbnails.medium.url} alt="wizeline.jpg" />
              <ListDetail>
                <h5>{video.snippet.title}</h5>
              </ListDetail>
            </ListVideoItem>
            <Divider/>
          </Fragment>
        ))}
    </ListContainer>
  );
}
