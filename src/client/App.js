import React, {Component} from 'react'
import {renderRoutes} from 'react-router-config'
import withStyles from 'react-jss'
import Header from './components/Header'
import {fetchCurrentUser} from "./actions";

const style = {
  root: {
    margin: 0
  }
};

class App extends Component {
  render() {
    let {route, classes} = this.props;
    return (
      <div className={classes.root}>
        <Header/>
        {renderRoutes(route.routes)}
      </div>
    )
  }
}

export default {
  component: withStyles(style)(App),
  loadData: ({dispatch}) => dispatch(fetchCurrentUser())
};