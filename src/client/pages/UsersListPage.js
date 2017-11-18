import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Helmet} from 'react-helmet'
import { withStyles } from 'material-ui/styles';
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

import {fetchUsers} from '../actions/index'

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

class UsersList extends Component {
  componentDidMount() {
    this.props.fetchUsers();
  }

  renderUsers() {
    return this.props.users.map(user => {
      return (
        <ListItem key={user.id} button>
          <ListItemAvatar>
            <Avatar>
              <UserIcon/>
            </Avatar>
          </ListItemAvatar>
          <ListItemText
            primary={user.name}
          />
        </ListItem>
      )
    })
  };

  head() {
    return (
      <Helmet>
        <title>{`Users (${this.props.users.length})`}</title>
        <meta property='og:title' content='Users App' />
      </Helmet>
    )
  }

  render() {
    let {classes} = this.props;
    return (
      <div style={{marginTop: 50}}>
        {this.head()}
        <Grid container justify={'center'}>
          <Grid item xs={11} md={6}>
            <Paper className={classes.paper}>
              <Typography type="display1" className={classes.title}
                style={{paddingTop: 0}}>
                Users
              </Typography>
              <div className={classes.demo}>
                <List dense>
                  {this.renderUsers()}
                </List>
              </div>
            </Paper>
          </Grid>
        </Grid>
      </div>
    )
  }
}

function mapStateToProps({users}) {
  return {
    users
  }
}

function loadData(store) {
  return store.dispatch(fetchUsers())
}

export default {
  component: connect(mapStateToProps, {fetchUsers})(withStyles(styles)(UsersList)),
  loadData
}