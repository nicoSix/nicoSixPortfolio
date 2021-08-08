import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Link as RouterLink } from 'react-router-dom';
import {
  Container,
  Typography
} from '@material-ui/core';

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
    textAlign: 'center',
    marginTop: '40px'
  }
}));

export default function NotFound() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Container>
        <Typography variant="h2" component="h1">
          Error 404: not found
        </Typography>
        <Typography variant="h5" component="h2">
          Oops, this page does not exist!
        </Typography>
        <Typography variant="h5" component="h2">
          <RouterLink to="/">
            Go back to the home page.
          </RouterLink>
        </Typography>
      </Container>
    </div>
  );
}