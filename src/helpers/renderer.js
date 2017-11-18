import React from 'react';
import {renderToString} from 'react-dom/server';
import {StaticRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import {renderRoutes} from 'react-router-config'
import serialize from 'serialize-javascript'
import Routes from '../client/Routes';
import {Helmet} from 'react-helmet';
import JssProvider from 'react-jss/lib/JssProvider';
import {withStyles, MuiThemeProvider} from 'material-ui/styles';
import wrapDisplayName from 'recompose/wrapDisplayName';
import {SheetsRegistry} from 'react-jss/lib/jss';
import {create} from 'jss';
import preset from 'jss-preset-default';
import {createMuiTheme} from 'material-ui/styles';
import {red, green} from 'material-ui/colors';
import createGenerateClassName from 'material-ui/styles/createGenerateClassName';

const theme = createMuiTheme({
  palette: {
    primary: green,
    accent: red,
    type: 'light',
  },
});

const jss = create(preset());
jss.options.createGenerateClassName = createGenerateClassName;

export const sheetsManager = new Map();
const sheetsRegistry = new SheetsRegistry();

export default (req, store, context) => {
  const helmet = Helmet.renderStatic();
  const content = renderToString(
    <Provider store={store}>
      <StaticRouter location={req.url} context={context}>
        <JssProvider registry={sheetsRegistry} jss={jss}>
          <MuiThemeProvider theme={theme} sheetsManager={sheetsManager}>
            {renderRoutes(Routes)}
          </MuiThemeProvider>
        </JssProvider>
      </StaticRouter>
    </Provider>
  );

  let css = sheetsRegistry.toString();

  return `
    <html>
      <head>
        ${helmet.title.toString()}
        ${helmet.meta.toString()}
      </head>
      <style id='server-side-styles'>${css}</style>
      <body>
        <div id="root">${content}</div>
        <script >
          window.INITIAL_STATE = ${serialize(store.getState())}
        </script>
        <script src="bundle.js"></script>
      </body>
    </html>
  `;
};
