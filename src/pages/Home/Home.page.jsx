import React, { useState } from 'react';
// Styles 
import './Home.styles.css';
//Styled components
import { HomeContent } from './Styles';
//Componentes 
import Header from '../../components/Header';
import ListVideos from '../../components/ListVideos';
//own hooks
import { useFetch } from '../../utils/hooks/useFetch';

export default function HomePage() {
  const [param, setParam] = useState('Wizeline');
  const { videos, loading, error } = useFetch(param, true);

  const handleSearch = (value) => {
    setParam(value);
  };

  if (error) return <div>Network error</div>;

  return (
    <>
      <Header handleSearch={handleSearch} />
      <h3>Welcome to Wizeline</h3>
      <HomeContent>
        {loading ? (
          <div data-testid="text-loading-home">Loading...</div>
        ) : (
          <ListVideos data={{ videos, loading, error }} />
        )}
      </HomeContent>
    </>
  );
}
