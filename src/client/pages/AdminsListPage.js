import React, {Component} from 'react'
import {connect} from 'react-redux'
import requireAuth from '../components/hocs/requireAuth'
import {Helmet} from 'react-helmet'
import withStyles from 'react-jss'
import List, {
  ListItem,
  ListItemAvatar,
  ListItemText,
} from 'material-ui/List';
import Paper from 'material-ui/Paper'
import Grid from 'material-ui/Grid';
import Avatar from 'material-ui/Avatar';
import Typography from 'material-ui/Typography';
import UserIcon from 'material-ui-icons/AccountCircle';

import {fetchAdmins} from '../actions/index'

const styles = {
  root: {
    flexGrow: 1,
    maxWidth: 752,
  },
  demo: {
    background: '#fff',
  },
  title: {
    padding: 16
  },
  paper: {
    padding: 30
  }
};

class AdminsListPage extends Component {
  componentDidMount() {
    this.props.fetchAdmins();
  }

  renderAdmins() {
    return this.props.admins.map(admin => {
      return (
        <ListItem key={admin.id} button>
          <ListItemAvatar>
            <Avatar>
              <UserIcon/>
            </Avatar>
          </ListItemAvatar>
          <ListItemText
            primary={admin.name}
          />
        </ListItem>
      )
    })
  };

  head() {
    return (
      <Helmet>
        <title>{`Admin`}</title>
        <meta property='og:title' content='Admins Page' />
      </Helmet>
    )
  };

  render() {
    let {classes} = this.props;
    return (
      <div style={{marginTop: 50}}>
        {this.head()}
        <Grid container justify={'center'}>
          <Grid item xs={11} md={6}>
            <Paper className={classes.paper}>
              <Typography type="display1" className={classes.title} style={{paddingTop: 0}}>
                Admins
              </Typography>
              <div className={classes.demo}>
                <List dense>
                  {this.renderAdmins()}
                </List>
              </div>
            </Paper>
          </Grid>
        </Grid>
      </div>
    )
  }
}

function mapStateToProps({admins}) {
  return {
    admins
  }
}

function loadData(store) {
  return store.dispatch(fetchAdmins())
}

export default {
  component: connect(mapStateToProps, {fetchAdmins})(withStyles(styles)(requireAuth(AdminsListPage))),
  loadData
}