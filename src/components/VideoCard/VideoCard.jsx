import React from 'react';
import { Link } from 'react-router-dom';

import { Card } from './Styles';

export default function VideoCard({ data, videoList }) {
  const { title, description, thumbnails } = data?.snippet;
  const videoId = data?.id?.videoId;

  return (
    <>
      <Card data-testid="list-videos">
        <Link
          to={{
            pathname: `/video/${videoId}`,
            data: { data, videoList },
          }}
        >
          <img src={thumbnails.medium.url} alt={title} />
          <h5>{title}</h5>
        </Link>
        <p>{description}</p>
      </Card>
    </>
  );
}
