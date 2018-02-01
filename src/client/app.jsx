import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';

import Routes from '../shared/routes';
import store from '../shared/store';

const App = () => (
  <Provider store={store}>
    <Router>
      <Routes />
    </Router>
  </Provider>
);

document.addEventListener('DOMContentLoaded', () => {
  render(<App />, document.getElementById('app'));
});

