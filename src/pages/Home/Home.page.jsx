import React from 'react';
// Styles
import './Home.styles.css';
// Styled components
import { Grid, Title } from './Styles';
// Componentes
import ListVideos from 'components/ListVideos/ListVideos';

import { useGlobalProvider } from '../../store/global.provider';

export default function HomePage() {
  const {
    state: { fetchingVideo, videoList, error, favoriteVideos },
  } = useGlobalProvider();

  if (error) return <div>Network error</div>;
  if (fetchingVideo) return <div>loading...</div>;

  return (
    <section>
      <Title>
        <h1 data-testid="title-home">Welcome to Wizeline</h1>
      </Title>
      <Grid>
        {videoList.items ? <ListVideos videos={videoList} favoriteVideos={favoriteVideos} /> : null}
      </Grid>
    </section>
  );
}
