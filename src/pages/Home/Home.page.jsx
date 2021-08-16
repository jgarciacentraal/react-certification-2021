import React from 'react';
// Styles
import './Home.styles.css';
// Styled components
import { VideoContent, Title } from './Styles';
// Componentes
import VideoCard from '../../components/VideoCard';

export default function HomePage({ data }) {
  console.log('data home page', data);
  const { videos, loading, error } = data;

  if (error) return <div>Network error</div>;
  if (loading) return <div>loading...</div>;

  return (
    <>
      <section>
        <Title>
          <h3>Welcome to Wizeline</h3>
        </Title>
        <VideoContent>
          {videos?.items &&
            videos.items.map((item) => (
              <VideoCard key={item.etag} data={item} videoList={videos} />
            ))}
        </VideoContent>
      </section>
    </>
  );
}
