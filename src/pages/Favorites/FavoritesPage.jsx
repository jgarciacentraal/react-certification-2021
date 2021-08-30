import React, { Fragment } from 'react';
import VideoCard from 'components/VideoCard/VideoCard';

import { useGlobalProvider } from 'store/global.provider';
import { SectionAlert, Section } from './Styles';

export default function FavoritesPage() {
  
  const { state: { favoriteVideos } } = useGlobalProvider();
    
  if (favoriteVideos.length === 0) {
    return (
      <SectionAlert>
        <h1>Add videos to your favorite list</h1>
      </SectionAlert>
    );
  }

  return (
    <Section>
      {favoriteVideos.map((video) => {
        return (
          <Fragment key={video.videoId}>
            <VideoCard data={{ ...video, favoriteVideos }} />
          </Fragment>
        );
      })}
    </Section>
  );
}
