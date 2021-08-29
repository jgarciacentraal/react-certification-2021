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
    state: { favoriteVideos },
    dispatch,
  } = useGlobalProvider();
  const { title, description, videoId, url } = props?.video?.videoSelected;
  const { favorite } = props?.video;

  // TODO videos agregados a Favorites Pages (Sidebar  Habilitar Navegacion a Favoritos )

  /* Funciona agregar videos al storage, falta remove 
    -> Funcionan ambas nomas checar bien que pedo
  */
  const addFavorite = (newVideo) => {
    const newFavorites = [...favoriteVideos, newVideo];
    addVideo(dispatch, newFavorites);
  };
  // pasaba videoId como param, quite para pasar el commit
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
          <VideoTitle data-testid={title}>{title}</VideoTitle>
          <VideoText>{description}</VideoText>
          <Button onClick={() => favoriteHandler()}>{favorite ? 'Remove' : 'Add'}</Button>
        </VideoInfoContainer>
      </VideoContainer>
    </>
  );
}
