import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App';
import './global.css';
import GlobalProvider from './store/global.provider';

ReactDOM.render(
  <GlobalProvider>
    <App />
  </GlobalProvider>,

  document.getElementById('root')
);
