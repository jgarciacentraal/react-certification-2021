import React from 'react';

import Header from '../../components/Header';
import ListVideos from '../../components/ListVideos';

import { HomeContent } from './Styles';

import { mockVideos } from '../../MockData';

import './Home.styles.css';



export default function HomePage() {
  return (
    <>
      <Header/>
        <h3>Welcome to Wizeline</h3>
        <HomeContent>
          <ListVideos data={mockVideos}/>
        </HomeContent>
    </>
  )
}
