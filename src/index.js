import 'babel-polyfill'
import express from 'express';
import {matchRoutes} from 'react-router-config'
import {createGenerateClassName, SheetsRegistry} from 'react-jss'
import proxy from 'express-http-proxy'
import Routes from './client/Routes'
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
    const generateClassName = createGenerateClassName();
    const content = renderer(req, store, context, sheetsRegistry, generateClassName);
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
