import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux'
import withStyles from 'react-jss';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';

const styles = {
  root: {
    width: '100%',
    marginBottom: 30
  },
  flex: {
    flex: 1,
    '&:hover': {
      cursor: 'pointer',
      textDecoration: 'none !important'
    }
  },
  link: {
    textDecoration: 'none !important',
    color: '#fff'
  },
  toolbar: {
    justifyContent: 'space-between'
  },
  buttons: {
    '& a': {
      color: '#fff !important',
      textDecoration: 'none !important'
    }
  }
};

const Header = props => {
  const {classes, auth} = props;
  console.log(auth);
  const authButton = auth ?
    (<Button color="contrast">
      <a href='/api/logout'>logout</a>
    </Button>) :
    (<Button color="contrast">
      <a href='/api/auth/google'>login</a>
    </Button>);
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar className={classes.toolbar}>
          <Link className={classes.link} to='/'>
            <Typography type="title" color="inherit" className={classes.flex}>
              React SSR
            </Typography>
          </Link>
          <div className={classes.buttons}>
            <Button color="contrast">
              <Link to='/users'>users</Link>
            </Button>
            <Button color="contrast">
              <Link to='/admins'>admins</Link>
            </Button>
            {authButton}
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
};

function mapStateToProps({auth}) {
  return {auth}
}

export default connect(mapStateToProps)(withStyles(styles)(Header));
