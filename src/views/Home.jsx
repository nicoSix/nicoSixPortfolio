import React from 'react';
import PresentationCard from '../components/PresentationCard';
import AboutCard from '../components/AboutCard';
import { makeStyles } from '@material-ui/core/styles';
import {
  Grid,
  Container
} from '@material-ui/core';
import WorkSummaryCard from '../components/WorkSummaryCard';
import ThesisCard from '../components/ThesisCard';

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
  }
}));

export default function Navbar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Container>
        <Grid container spacing={3}>
          <Grid item sm={3} xs={12}>
            <PresentationCard />
          </Grid>
          <Grid item sm={9} xs={12}>
            <Grid container spacing={3}>
              <Grid item sm={12}>
                <AboutCard />
              </Grid>
              <Grid item sm={7} xs={12}>
                <ThesisCard />
              </Grid>
              <Grid item sm={5} xs={12}>
                <WorkSummaryCard />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}