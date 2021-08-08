import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  navbarItem: {
    marginRight: theme.spacing(2),
    color: 'white',
    textDecoration: 'none',
    '&:hover': {
      textDecoration: 'underline white',
    }
  },
  title: {
    flexGrow: 1,
    textAlign: 'left',
    color: 'white',
    textDecoration: 'none'
  },
  titleSize: {
    fontSize: '120%'
  },
  appBar: {
    backgroundColor: '#52307c',
    marginBottom: '20px'
  },
  downloadCV: {
    '&:hover': {
      cursor: 'pointer',
      textDecoration: 'underline white',
    }
  }
}));

export default function Navbar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.appBar}>
        <Toolbar>
          <Link to="/" className={classes.title}>
            <Typography variant="overline" className={classes.titleSize}>
              <b>Nicolas Six</b>
            </Typography>
          </Link>
          <Link to="/experience" className={classes.navbarItem}>
            Past experiences
          </Link>
          <Link to="/publications" className={classes.navbarItem}>
            Publications
          </Link>
          <Link to="/projects" className={classes.navbarItem}>
            Projects
          </Link>
          <span className={classes.downloadCV} onClick={() => window.open('/files/cv.pdf')}>
            Download CV
          </span>
        </Toolbar>
      </AppBar>
    </div>
  );
}