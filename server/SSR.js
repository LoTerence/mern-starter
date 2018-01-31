import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import SSRRoutes from '../client/routes';
import store from '../client/store';
import render from './render';

exports.SSR = (request, response) => {
  const context = {};

  if (context.url) {
    response.redirect(context.url);
    return;
  }

  const html = ReactDOMServer.renderToString(React.createElement(Provider, {
    store,
  }, React.createElement(StaticRouter, {
    location: request.url,
    context,
  }, React.createElement(SSRRoutes))));

  response.status(200).send(render(html));
};
