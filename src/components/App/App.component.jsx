import React, {useState} from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import AuthProvider from '../../providers/Auth';
import HomePage from '../../pages/Home';
import VideoPage from '../../pages/Video';
import LoginPage from '../../pages/Login';
import NotFound from '../../pages/NotFound';
import SecretPage from '../../pages/Secret';
import Header from '../Header/Header';
import Layout from '../Layout';
import Private from '../Private';
import SideBar from 'components/SideBar/SideBar'

import GlobalStyle from '../../GlobalStyle';


import { lightTheme, darkTheme } from '../../utils/themes';
import { useGlobalProvider } from '../../store/global.provider';


function App() {
  const [openSideBar, setOpenSideBar] = useState(false);
  const {
    state: { themeValue },
  } = useGlobalProvider();
  const themeMode = themeValue === 'light' ? lightTheme : darkTheme;

  return (
    <ThemeProvider theme={themeMode}>
      <GlobalStyle />
      <BrowserRouter>
        <AuthProvider>
          <Layout>
            <Header toggleSideBar={setOpenSideBar} />
            <SideBar open={openSideBar} toggleSideBar={setOpenSideBar} />
            <Switch>
              <Route exact path="/">
                <HomePage />
              </Route>
              <Route exact path="/video/:id">
                <VideoPage />
              </Route>
              <Route exact path="/login">
                <LoginPage />
              </Route>
              <Private exact path="/secret">
                <SecretPage />
              </Private>
              <Route path="*">
                <NotFound />
              </Route>
            </Switch>
          </Layout>
        </AuthProvider>
      </BrowserRouter>
      <GlobalStyle />
    </ThemeProvider>
  );
}

export default App;
