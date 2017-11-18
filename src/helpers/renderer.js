import React from 'react';
import {renderToString} from 'react-dom/server';
import {StaticRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import {renderRoutes} from 'react-router-config'
import serialize from 'serialize-javascript'
import Routes from '../client/Routes';
import {JssProvider} from 'react-jss';
import {MuiThemeProvider, createMuiTheme} from 'material-ui/styles';
import {blue} from 'material-ui/colors';
import {Helmet} from 'react-helmet'

export default (req, store, context, sheetsRegistry) => {


  const theme = createMuiTheme({
    palette: {
      primary: blue
    }
  });

  const content = renderToString(
    <Provider store={store}>
      <StaticRouter location={req.url} context={context}>
        <JssProvider registry={sheetsRegistry}>
          <MuiThemeProvider theme={theme}>
            <div>{renderRoutes(Routes)}</div>
          </MuiThemeProvider>
        </JssProvider>
      </StaticRouter>
    </Provider>
  );

  const css = sheetsRegistry.toString();
  const helmet = Helmet.renderStatic();

  return `
    <html>
      <head>
        ${helmet.title.toString()}
        ${helmet.meta.toString()}
      </head>
      <style>body {margin: 0;}</style>
      <body>
        <div id="root">${content}</div>
        <style id="jss-server-side">${css}</style>
        <script >
          window.INITIAL_STATE = ${serialize(store.getState())}
        </script>
        <script src="bundle.js"></script>
      </body>
    </html>
  `;
};
