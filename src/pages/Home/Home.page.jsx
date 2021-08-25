import React from 'react';
// Styles
import './Home.styles.css';
// Styled components
import { VideoContent, Title } from './Styles';
// Componentes
import VideoCard from '../../components/VideoCard';

import { useGlobalProvider } from '../../store/global.provider';


export default function HomePage() {
  const {
    state: { fetchingVideo, videoList, error },
  } = useGlobalProvider();

  if (error) return <div>Network error</div>;
  if (fetchingVideo) return <div>loading...</div>;

  return (
    <>
      <section>
        
        <Title>
          <h3>Welcome to Wizeline</h3>
        </Title>
        <VideoContent>
          {videoList?.items &&
            videoList.items.map((item) => (
              <VideoCard key={item.etag} data={item} videoList={videoList} />
            ))}
        </VideoContent>
      </section>
    </>
  );
}
