import 'babel-polyfill'
import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter} from 'react-router-dom'
import {createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import {Provider} from 'react-redux'
import {renderRoutes} from 'react-router-config'
import {createGenerateClassName, JssProvider, SheetsRegistry} from 'react-jss';
import axios from 'axios'
import {MuiThemeProvider, createMuiTheme} from 'material-ui/styles';
import {blue} from 'material-ui/colors'

import Routes from './Routes'
import reducers from './reducers'

const axiosInstance = axios.create({
  baseURL: '/api'
});

const store = createStore(
  reducers, window.INITIAL_STATE,
  applyMiddleware(thunk.withExtraArgument(axiosInstance))
);

const theme = createMuiTheme({
  palette: {
    primary: blue
  }
});

const generateClassName = createGenerateClassName();
const sheet = new SheetsRegistry();

ReactDOM.hydrate(
  <Provider store={store}>
    <BrowserRouter>
      <JssProvider registry={sheet} generateClassName={generateClassName}>
        <MuiThemeProvider theme={theme}>
          <div>{renderRoutes(Routes)}</div>
        </MuiThemeProvider>
      </JssProvider>
    </BrowserRouter>
  </Provider>,
  document.querySelector('#root')
);
