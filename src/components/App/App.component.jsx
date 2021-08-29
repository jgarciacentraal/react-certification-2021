import React, { useState } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import SideBar from 'components/SideBar/SideBar';
import FavoritesPage from 'pages/Favorites/FavoritesPage';
import FavoriteVideo from 'pages/FavoriteVideo';
import HomePage from '../../pages/Home';
import VideoPage from '../../pages/Video';
import LoginPage from '../../pages/Login';
import NotFound from '../../pages/NotFound';
import Header from '../Header/Header';
import Layout from '../Layout';
import Private from '../Private';

import GlobalStyle from '../../GlobalStyle';

import { lightTheme, darkTheme } from '../../utils/themes';
import { useGlobalProvider } from '../../store/global.provider';

export default function App() {
  const [openSideBar, setOpenSideBar] = useState(false);
  const {
    state: { themeValue },
  } = useGlobalProvider();
  const themeMode = themeValue === 'light' ? lightTheme : darkTheme;

  return (
    <ThemeProvider theme={themeMode}>
      <GlobalStyle />
      <BrowserRouter>
        <Layout>
          <Header toggleSideBar={setOpenSideBar} />
          <SideBar open={openSideBar} toggleSideBar={setOpenSideBar} />
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/video/:id" component={VideoPage} />
            <Route exact path="/login" component={LoginPage} />
            <Private exact path="/favorites" component={FavoritesPage} />
            <Private path="/favorites/:videoId" component={FavoriteVideo} />
            <Route path="*" component={NotFound} />
          </Switch>
        </Layout>
      </BrowserRouter>
      <GlobalStyle />
    </ThemeProvider>
  );
}
