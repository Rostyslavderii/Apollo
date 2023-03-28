import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { App } from 'components/App';
// import { Provider } from "react-redux";
// import { store } from 'components/CardsSection/CardsSlider/CardsSlider';
import { ThemeProvider } from 'styled-components';
import { theme, GlobalStyle } from './utils';
import { ApolloProvider } from '@apollo/client';
import {client} from './apollo/clientAPI';



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename="/Apollo/">
      {/* <Provider store={store}> */}
      <ApolloProvider client={client}>
      <ThemeProvider theme={theme}>
      <App />
        <GlobalStyle />
        </ThemeProvider>
        </ApolloProvider>
        {/* </Provider> */}
      </BrowserRouter>
  </React.StrictMode>
);

//basename="/Apollo"
