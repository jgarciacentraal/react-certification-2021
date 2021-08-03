import React, { useState } from 'react';

import Header from '../../components/Header';
import ListVideos from '../../components/ListVideos';
import { HomeContent } from './Styles';
import './Home.styles.css';
import { useFetch } from '../../utils/hooks/useFetch';

export default function HomePage() {
  const [param, setParam] = useState('Wizeline');
  const { videos, loading, error } = useFetch(param, true);

  const handleSearch = (value) => {
    setParam(value);
  };

  return (
    <>
      <Header handleSearch={handleSearch} />
      <h3>Welcome to Wizeline</h3>
      <HomeContent>
        <ListVideos data={{ videos, loading, error }} />
      </HomeContent>
    </>
  );
}
