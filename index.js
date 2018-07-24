import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';
import './style.scss';

import { Provider } from 'mobx-react'
import store from './store/squadstore';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
