import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import store from './pages/app/store';
import { App } from './pages';

const Root = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

ReactDom.render(
  <Root />,
  document.body.querySelector('#root'),
);
