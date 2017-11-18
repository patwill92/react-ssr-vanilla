import React from 'react';
import withStyles from 'react-jss'
import {Helmet} from 'react-helmet'
import Text from 'material-ui/Typography'
import Paper from 'material-ui/Paper'
import Grid from 'material-ui/Grid'

const style = theme => ({
  paper: {
    marginTop: 50,
    paddingTop: 50,
    paddingBottom: 50
  },
  text: {
    fontWeight: theme.typography.fontWeightLight
  }
});

const Home = props => {
  let {classes} = props;
  let head = () => {
    return (
      <Helmet>
        <title>{`Home`}</title>
        <meta property='og:title' content='Home Page'/>
      </Helmet>
    )
  };
  return (
    <Grid container justify={'center'}>
      {head()}
      <Grid item xs={11}>
        <Paper className={classes.paper}>
          <Text className={classes.text} type='display1' gutterBottom align={'center'}>
            Home Component
          </Text>
          <Text gutterBottom align={'center'}>
            Check out these awesome features
          </Text>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default {
  component: withStyles(style)(Home)
};
