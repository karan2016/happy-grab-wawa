import 'babel-polyfill';
import 'whatwg-fetch';

import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {IntlProvider} from 'react-intl';
import {AppContainer} from 'react-hot-loader';

import api from 'api/index';
import store from './store';
import Router from './router';

// global styles
import './css/style.scss';

// apply polyfill
if (!window.Intl) {
  window.Intl = import('intl');
}

api.setEndpoint('/api');

const render = (AppRouter) => {
  ReactDOM.render(
    <AppContainer>
      <Provider store={store}>
        <IntlProvider locale="en">
          <AppRouter />
        </IntlProvider>
      </Provider>
    </AppContainer>,
    document.getElementById('app')
  );
};

render(Router);

// need to re-mount app component on hot reload
if (module.hot) {
  module.hot.accept('./router.js', () => {
    render(require('./router').default);
  });
}
