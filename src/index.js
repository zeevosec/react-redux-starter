import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import { HelmetProvider } from 'react-helmet-async';

import { ThemeProvider } from '@material-ui/core';

import configureStore from './store/index';
import history from './modules/history';
import theme from './modules/theme';

import App from './containers/App';

import './icons';

const store = configureStore({}, history);

ReactDOM.render(
  <Provider store={store}>
    <HelmetProvider>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </HelmetProvider>
  </Provider>,
  document.getElementById('root'),
);
