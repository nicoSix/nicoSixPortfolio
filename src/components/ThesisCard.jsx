import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Card,
  CardContent,
  Typography,
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  pos: {
    marginBottom: theme.spacing(2)
  }
}));

export default function ThesisCard() {
  const classes = useStyles();

  return (
    <Card>
      <CardContent className={classes.cardContent}>
        <Typography variant="h5" component="h1" className={classes.pos}>
          Thesis summary
        </Typography>
        <Typography variant="body1" component="p" className={classes.pos}>
          Currently, I am working on a thesis dedicated to easing the adoption
          of blockchain in organizations, by designing a semi-automated framework for conception and
          implementation of blockchain applications.
        </Typography>
        <Typography variant="body1" component="p" className={classes.pos}>
          It is constituted with 3 artifacts: an automated decision
          process that takes into account company’s assets and requirements, a knowledge base of blockchain
          technologies and patterns to support the decision process, and a code generator based on previous
          decision process results.
        </Typography>
        <Typography variant="body1">
          Do you want to learn more? Feel free to read associated publications in the <a href="publications">Publications</a> section.
        </Typography>
      </CardContent>
    </Card>
  );
}