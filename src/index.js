import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import App from './App';
import campaignReducer from './reducers/campaignReducer';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

const store = createStore(campaignReducer);

render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
