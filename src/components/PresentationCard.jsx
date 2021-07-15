import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Card,
  CardActions,
  CardContent,
  Typography,
  Avatar,
  Box,
  IconButton,
  Tooltip
} from '@material-ui/core';
import {
  LinkedIn as LinkedInIcon,
  Twitter as TwitterIcon,
  GitHub as GitHubIcon,
  School as SchoolIcon
} from '@material-ui/icons';
import Profile from '../static/images/profile.jpeg';

const useStyles = makeStyles((theme) => ({
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  profileImage: {
    width: '80%',
    height: 'auto',
    marginLeft: 'auto',
    marginRight: 'auto'
  },
  profileText: {
    marginTop: theme.spacing(2),
    textAlign: 'center',
  },
  socialHandlerGroup: { 
    paddingTop: '0',
    justifyContent: 'center'
  },
  cardContent: { paddingBottom: '0' }
}));

export default function PresentationCard() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardContent className={classes.cardContent}>
        <Avatar alt="Nicolas Six" src={Profile} className={classes.profileImage} />
        <Box className={classes.profileText}>
          <Typography variant="h6" component="h2">
            Nicolas Six
          </Typography>
          <Typography className={classes.pos} color="textSecondary">
            Software Engineer & Ph.D. student
          </Typography>
        </Box>
      </CardContent>
      <CardActions className={classes.socialHandlerGroup}>
        <Tooltip title="Go to LinkedIn profile">
          <IconButton
            onClick={() => {window.location.href="https://www.linkedin.com/in/nicolas-six/"}}
          >
            <LinkedInIcon fontSize="large" />
          </IconButton>
        </Tooltip>
        <Tooltip title="Go to Twitter profile">
          <IconButton
            onClick={() => {window.location.href="https://twitter.com/Nicothesixth"}}
          >
            <TwitterIcon fontSize="large" />
          </IconButton> 
        </Tooltip>
        <Tooltip title="Go to Github profile">
          <IconButton
            onClick={() => {window.location.href="https://github.com/nicoSix"}}
          >
            <GitHubIcon fontSize="large" />
          </IconButton>
        </Tooltip>
        <Tooltip title="Go to Google Scholar profile">
          <IconButton
            onClick={() => {window.location.href="https://scholar.google.fr/citations?user=jjmJ5MIAAAAJ&hl=fr"}}
          >
            <SchoolIcon fontSize="large" />
          </IconButton>
        </Tooltip>
      </CardActions>
    </Card>
  );
}