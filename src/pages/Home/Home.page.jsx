import React from 'react';
// Styles
import './Home.styles.css';
// Styled components
import { HomeContent } from './Styles';
// Componentes
import ListVideos from '../../components/ListVideos';
// own hooks
import { useFetch } from '../../utils/hooks/useFetch';

export default function HomePage() {
  const { videos, loading, error } = useFetch('wizeline', true);

  
  if (error) return <div>Network error</div>;

  return (
    <>
      <HomeContent>
        <h3>Welcome to Wizeline</h3>
        
       
          <ListVideos data={{ videos, loading, error }} />
        
        
        
      </HomeContent>
    </>
  );
}
