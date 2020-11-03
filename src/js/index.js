import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import {
  App,
  store,
} from './app';

const Root = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

ReactDom.render(
  <Root />,
  document.body.querySelector('#root'),
);
