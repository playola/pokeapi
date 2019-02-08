import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import store from '#store';
import { theme } from '#style/theme';
import { GlobalStyle } from '#style/global';
import Routes from '#routes';

const AppProvider = () => (
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <React.Fragment>
        <GlobalStyle />
        <Routes />
      </React.Fragment>
    </ThemeProvider>
  </Provider>
);

ReactDOM.render(
  <AppProvider />,
  document.getElementById('root'),
);
