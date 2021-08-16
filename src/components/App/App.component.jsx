import React, {useState} from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import AuthProvider from '../../providers/Auth';
import HomePage from '../../pages/Home';
import VideoPage from '../../pages/Video';
import LoginPage from '../../pages/Login';
import NotFound from '../../pages/NotFound';
import SecretPage from '../../pages/Secret';
import Header from '../Header/Header';
import Layout from '../Layout';
import Private from '../Private';

// own hook
import { useFetch } from '../../utils/hooks/useFetch';

function App() {
  const [param, setParam] = useState('wizeline');
  const { videos, loading, error } = useFetch(param, true);

  const handleChange = (value) => {
    setParam(value);
  };
  
  return (
    <BrowserRouter>
      <AuthProvider>
        <Layout>
          <Header handleChange={handleChange} />
          <Switch>
            <Route exact path="/">
              <HomePage data={{ videos, loading, error }}  />
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
  );
}

export default App;
