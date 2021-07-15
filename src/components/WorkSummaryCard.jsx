import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ArdentLogo from '../static/images/ardent-logo.png';
import BladeLogo from '../static/images/blade-logo.png';
import {
  Card,
  CardContent,
  Typography,
  List,
  ListItem,
  Divider,
  ListItemText,
  ListItemAvatar,
  Avatar
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  pos: {
    marginBottom: theme.spacing(1,8)
  },
  inline: {
    display: 'inline',
  },
  workList: {
    padding: 0
  }
}));

const works = [
  {
    name: 'Ardent',
    text: 'Ardent is a tool created to extract and process software architecture knowledge from studies when performing a systematic literature review.',
    image: ArdentLogo
  },
  {
    name: 'BLADE',
    text: 'The BLADE project aims to help companies choose between available blockchains technologies and patterns.',
    image: BladeLogo
  },
];

export default function WorkSummaryCard() {
  const classes = useStyles();

  return (
    <Card>
      <CardContent className={classes.cardContent}>
        <Typography variant="h5" component="h1" className={classes.pos}>
          Some of my projects
        </Typography>
        <List className={classes.workList}>
          {works.map(((work, i) => {
            return (
              <>
                <ListItem alignItems="flex-start">
                  <ListItemAvatar>
                    <Avatar alt={work.name} src={work.image} />
                  </ListItemAvatar>
                  <ListItemText
                    primary={work.name}
                    secondary={
                      <React.Fragment>
                        {work.text}
                      </React.Fragment>
                    }
                  />
                </ListItem>
                { i !== works.length - 1 ? <Divider variant="inset" component="li" /> : <span /> }
              </>
            )
          }))}
        </List>
      </CardContent>
    </Card>
  );
}