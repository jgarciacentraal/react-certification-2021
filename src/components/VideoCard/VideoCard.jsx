import React from 'react';
import { Link } from 'react-router-dom';
import { Card } from './Styles';
import { selectVideo } from '../../store/globalActions';
import { useGlobalProvider } from '../../store/global.provider';

export default function VideoCard({ data }) {
  const { title, description, url, videoId } = data;
  const { dispatch } = useGlobalProvider();

  const selectingVideo = () => {
    selectVideo(dispatch, data);
  };

  return (
    <>
      <Card data-testid="list-videos">
        <Link
          to={{
            pathname: `/video/${videoId}`,
          }}
          onClick={selectingVideo}
        >
          <img src={url} alt={title} />
          <h5>{title}</h5>
        </Link>
        <p>{description}</p>
      </Card>
    </>
  );
}
