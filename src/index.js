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
          <PersistGate loading={null} persistor={persistor}>
        <ApolloProvider client={client}>
      <ThemeProvider theme={theme}>
      <App />
            <GlobalStyle />
          </ThemeProvider>
          </ApolloProvider>
          </PersistGate>
        </Provider>
      </BrowserRouter>
  </React.StrictMode>
);

//basename="/Apollo"
