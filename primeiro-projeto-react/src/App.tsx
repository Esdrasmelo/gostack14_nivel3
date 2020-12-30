import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import GlobalStyles from './styles/global';
import Routes from './routes/index';

const App: React.FC = () => (
  <React.Fragment>
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
    <GlobalStyles />
  </React.Fragment>
);

export default App;
