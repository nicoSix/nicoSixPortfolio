import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1,
    textAlign: 'left',
    fontSize: '120%'
  },
  appBar: {
    backgroundColor: '#52307c',
    marginBottom: '20px'
  }
}));

export default function Navbar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.appBar}>
        <Toolbar>
          <Typography variant="overline" className={classes.title}>
            <b>Nicolas Six</b>
          </Typography>
          <Button className={classes.menuButton} color="inherit">Past experiences</Button>
          <Button className={classes.menuButton} color="inherit">Publications</Button>
          <Button className={classes.menuButton} color="inherit">Projects</Button>
          <Button className={classes.menuButton} color="inherit">CV</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}