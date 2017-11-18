import 'babel-polyfill'
import express from 'express';
import {matchRoutes} from 'react-router-config'
import {SheetsRegistry} from 'react-jss'
import proxy from 'express-http-proxy'
import Routes from './client/Routes'

process.env.NPM_CONFIG_LOGLEVEL = 'error';
process.env.NPM_CONFIG_PRODUCTION = true;
process.env.NODE_VERBOSE = false;
process.env.NODE_ENV = 'production';
process.env.NODE_MODULES_CACHE = true;

import renderer from './helpers/renderer';
import createStore from './helpers/createStore'

const app = express();

app.use(
  '/api',
  proxy('http://react-ssr-api.herokuapp.com', {
    proxyReqOptDecorator(opts) {
      opts.headers['x-forwarded-host'] = 'localhost:3000';
      return opts;
    }
  })
);
app.use(express.static('public'));
app.get('*', (req, res) => {
  const store = createStore(req);
  const promises = matchRoutes(Routes, req.path).map(({route}) => {
    return route.loadData ? route.loadData(store) : null
  }).map(promise => {
    if (promise) {
      return new Promise((resolve) => {
        promise.then(resolve).catch(resolve)
      })
    }
  });
  console.log(promises);
  Promise.all(promises).then(() => {
    const context = {};
    const sheetsRegistry = new SheetsRegistry();
    const content = renderer(req, store, context, sheetsRegistry);
    if (context.url) {
      return res.redirect(301, context.url)
    }
    if (context.notFound) {
      res.status(404)
    }
    res.send(content);
  })
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
