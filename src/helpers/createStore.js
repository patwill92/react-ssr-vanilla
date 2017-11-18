import {createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import axios from 'axios'
import reducers from '../client/reducers'

export default (req) => {
  //pass in server axios header to redux-thunk
  const axiosInstance = axios.create({
    baseURL: 'http://react-ssr-api.herokuapp.com',
    headers: {cookie: req.get('cookie') || ''}
  });
  //return store
  return createStore(reducers, {}, applyMiddleware(thunk.withExtraArgument(axiosInstance)));
}