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

export default function Projects() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Container>
        <Typography variant="h2" component="h1">
          Work in progress! 🔨
        </Typography>
        <Typography variant="h5" component="h2">
          Come back later to see the content.
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