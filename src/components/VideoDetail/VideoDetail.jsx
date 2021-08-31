import React from 'react';
import { useGlobalProvider } from 'store/global.provider';
import { addVideo, removeVideo } from 'store/globalActions';

import {
  VideoContainer,
  VideoInfoContainer,
  VideoTitle,
  VideoText,
  VideoiFrame,
  Button,
} from './Styles';

export default function VideoDetail(props) {
  const {
    state: { favoriteVideos, user },
    dispatch,
  } = useGlobalProvider();
  const { title, description, videoId, url } = props?.video?.videoSelected;
  const { favorite } = props?.video;

  const addFavorite = (newVideo) => {
    const newFavorites = [...favoriteVideos, newVideo];
    addVideo(dispatch, newFavorites);
  };

  const removeFavorite = () => {
    const newFavorites = favoriteVideos.filter((video) => video.videoId !== videoId);
    removeVideo(dispatch, newFavorites);
  };

  const favoriteHandler = () => {
    const newVideo = { videoId, title, description, url };
    if (favorite) return removeFavorite(videoId);
    addFavorite(newVideo);
  };

  return (
    <>
      <VideoContainer>
        <VideoiFrame title="playVideo" src={`https://www.youtube.com/embed/${videoId}`} />
        <VideoInfoContainer>
          <VideoTitle data-testid="title-detail">{title}</VideoTitle>
          <VideoText data-testid="descrpition-detail">{description}</VideoText>

          {user && (
            <Button onClick={() => favoriteHandler()}>
              {favorite ? 'Remove' : 'Add'}
            </Button>
          )}
        </VideoInfoContainer>
      </VideoContainer>
    </>
  );
}
