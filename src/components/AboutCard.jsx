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

export default function PresentationCard() {
  const classes = useStyles();

  return (
    <Card>
      <CardContent className={classes.cardContent}>
        <Typography variant="h5" component="h1" className={classes.pos}>
          About me
        </Typography>
        <Typography variant="body1" component="p" className={classes.pos}>
          Graduated from Centrale Lille - IG2I as a Software Engineer, I am now a Computer Science Ph. D. candidate
          in the <a href="https://cri.pantheonsorbonne.fr/">CRI (Centre de Recherche en Informatique)</a> at Université Paris 1 Panthéon-Sorbonne.
          My research subjects are blockchain technology, software architecture and more broadly the design of innovative solutions. 
          I'm fascinated about the potential of blockchain to reshape arts of the society in the next few years by establishing trust between companies, individuals, governments and other organizations.
        </Typography>
        <Typography variant="body1" component="p">
          Always open for collaborations on research projects and other blockchain-related topics!
          Feel free to contact me at this address: <a href="mailto:nicolas.six@univ-paris.fr">nicolas.six@univ-paris.fr</a>.
        </Typography>
      </CardContent>
    </Card>
  );
}