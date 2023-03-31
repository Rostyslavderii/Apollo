import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { App } from 'components/App';
import { Provider } from "react-redux";
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from 'redux/store';
import { ThemeProvider } from 'styled-components';
import { theme, GlobalStyle } from './utils';
import { ApolloProvider } from '@apollo/client';
import {client} from './apollo/clientAPI';



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename="/Apollo/">
      <Provider store={store}>
        <ApolloProvider client={client}>
          <PersistGate loading={null} persistor={persistor}>
      <ThemeProvider theme={theme}>
      <App />
            <GlobalStyle />
          </ThemeProvider>
          </PersistGate>
          </ApolloProvider>
        </Provider>
      </BrowserRouter>
  </React.StrictMode>
);

//basename="/Apollo"
