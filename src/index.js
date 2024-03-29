import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import { ThemeProvider } from 'styled-components';
import { theme, GlobalStyle } from './utils';
import { ApolloProvider } from '@apollo/client';
import {client} from './apollo/clientAPI';



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
        <ApolloProvider client={client}>
      <ThemeProvider theme={theme}>
      <App />
            <GlobalStyle />
          </ThemeProvider>
          </ApolloProvider>
  </React.StrictMode>
);

