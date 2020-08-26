import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import GlobalStyle from './styles/global';

import { AuthProvider } from './context/auth';
import { ToastProvider } from './context/toast';

import Routes from './routes';

const App: React.FC = () => {
  return (
    <>
      <AuthProvider>
        <ToastProvider>
          <Router>
            <Routes />
          </Router>
        </ToastProvider>
      </AuthProvider>

      <GlobalStyle />
    </>
  );
};

export default App;
