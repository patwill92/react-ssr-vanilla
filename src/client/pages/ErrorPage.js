import React from 'react';
import { withStyles } from 'material-ui/styles';
import {Helmet} from 'react-helmet'
import Text from 'material-ui/Typography'
import Grid from 'material-ui/Grid'
import Paper from 'material-ui/Paper'

const styles = {
  root: {
    marginTop: 50
  },
  paper: {
    paddingTop: 50,
    paddingBottom: 50
  }
};

const ErrorPage = ({classes, staticContext = {}}) => {
  staticContext.notFound = true;
  let head = () =>  {
    return (
      <Helmet>
        <title>{`Error`}</title>
        <meta property='og:title' content='Error Page' />
      </Helmet>
    )
  };
  return (
    <Grid className={classes.root} container justify={'center'}>
      {head()}
      <Grid item xs={11}>
        <Paper className={classes.paper}>
          <Text type='display1' align={'center'}  gutterBottom>NOT FOUND</Text>
          <Text  type='title' align={'center'} color='error'>404</Text>
        </Paper>
      </Grid>
    </Grid>
  )
};

export default {
  component: withStyles(styles)(ErrorPage)
}