import React, {Component} from 'react'
import {renderRoutes} from 'react-router-config'
import { withStyles } from 'material-ui/styles';
// import withRoot from './components/hocs/withRoot';
import Header from './components/Header'
import {fetchCurrentUser} from "./actions";

const styles = {
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
  component: withStyles(styles)(App),
  loadData: ({dispatch}) => dispatch(fetchCurrentUser())
};