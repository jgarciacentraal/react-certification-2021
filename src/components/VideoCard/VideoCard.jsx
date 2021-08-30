import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Card } from './Styles';
import { selectVideo } from '../../store/globalActions';
import { useGlobalProvider } from '../../store/global.provider';

export default function VideoCard({ data }) {
  const location = useLocation()
  const { title, description, url, videoId } = data;
  const { dispatch } = useGlobalProvider();

  const route = location.pathname.includes('favorites') ? '/favorites' : '/video';

  

  const selectingVideo = () => {
    selectVideo(dispatch, data);
  };

  return (
    <>
      <Card data-testid="list-videos">
        <Link
          to={{
            pathname: `${route}/${videoId}`,
          }}
          onClick={selectingVideo}
        >
          <img src={url} alt={title} />
          <h5 data-testid='title-card-video'>{title}</h5>
        </Link>
        <p data-testid='description-card-video'>{description}</p>
      </Card>
    </>
  );
}
