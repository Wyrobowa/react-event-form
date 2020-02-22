import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import dotenv from 'dotenv';

import App from './App';
import configureStore from './configureStore';

dotenv.config();

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
