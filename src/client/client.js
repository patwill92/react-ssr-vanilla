import 'babel-polyfill'
import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter} from 'react-router-dom'
import {createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import {Provider} from 'react-redux'
import {renderRoutes} from 'react-router-config'
import axios from 'axios'
import {createMuiTheme, MuiThemeProvider} from 'material-ui/styles';
import {red, green} from 'material-ui/colors';


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
    primary: green,
    accent: red,
    type: 'light',
  },
});

ReactDOM.hydrate(
  <Provider store={store}>
    <BrowserRouter>
      <MuiThemeProvider theme={theme}>
        {renderRoutes(Routes)}
      </MuiThemeProvider>
    </BrowserRouter>
  </Provider>,
  document.querySelector('#root'),
  () => {
    const ssStyles = document.getElementById('server-side-styles');
    ssStyles.parentNode.removeChild(ssStyles)
  }
);
