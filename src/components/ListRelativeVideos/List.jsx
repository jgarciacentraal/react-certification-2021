import React from 'react';
import { Link } from 'react-router-dom';

import Divider from '@material-ui/core/Divider';

import { selectVideo } from 'store/globalActions';
import { useGlobalProvider } from 'store/global.provider';
import { ListContainer, ListVideoItem, ListImg, ListDetail } from './Styles';

import { useFetch } from '../../utils/hooks/useFetch';

export default function List(props) {
  // TODO recibir el id para mandarlo al hook de useFetch y traer videos
  const { videosRelated, error } = useFetch(props.videoId);
  const { dispatch } = useGlobalProvider();

  const onSelectVideo = (videoSelected) => {
    selectVideo(dispatch, videoSelected);
  };

  if (error) return <>Network error</>;

  return (
    <ListContainer>
      {videosRelated?.items &&
        videosRelated?.items.map((video) => {
          const snippet = video?.snippet ? video.snippet : false;
          if (!snippet) return null;

          const { title, description } = snippet;
          const { url } = snippet.thumbnails.medium;
          const { videoId } = video.id; // checar onSelectVideo mande id correcto en la prop
          return (
            <Link
              key={videoId}
              onClick={() => onSelectVideo({ title, description, url, videoId })}
              to={{
                pathname: `/video/${videoId}`,
              }}
            >
              <ListVideoItem>
                <ListImg src={url} alt="wizeline.jpg" />
                <ListDetail>
                  <h5>{title}</h5>
                </ListDetail>
              </ListVideoItem>
              <Divider />
            </Link>
          );
        })}
    </ListContainer>
  );
}
