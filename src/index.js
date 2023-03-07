import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { App } from 'components/App';
import { ThemeProvider } from 'styled-components';
import { theme, GlobalStyle } from './utils';
import './index.css';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename="/ApolloTest" >
      <ThemeProvider theme={theme}>
      <App />
        <GlobalStyle />
        </ThemeProvider>
      </BrowserRouter>
  </React.StrictMode>
);
