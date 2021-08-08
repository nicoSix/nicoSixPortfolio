import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Drawer from '@material-ui/core/Drawer';
import Divider from '@material-ui/core/Divider';

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
  drawerItem: {
    padding: '10px',
    textDecoration: 'none'
  },
  title: {
    flexGrow: 1,
    textAlign: 'left',
    color: 'white',
    textDecoration: 'none'
  },
  titleChild: {
    fontSize: '120%'
  },
  titleDrawer: {
    fontSize: '120%',
    textAlign: 'center'
  },
  appBar: {
    backgroundColor: '#52307c',
    marginBottom: '20px',
    "@media (max-width: 900px)": {
      paddingLeft: 0,
    },
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
  const [mobileView, setMobileView] = useState(window.innerWidth < 900);
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  useEffect(() => {
    const setResponsiveness = () => {
      setMobileView(window.innerWidth < 900);
      if (window.innerWidth > 900) setDrawerOpen(false);
    };

    setResponsiveness();
    window.addEventListener("resize", () => setResponsiveness());

    return () => {
      window.removeEventListener("resize", () => setResponsiveness());
    }
  }, []);

  const displayMobile = () => {
    return (
      <Toolbar>
        <IconButton
          {...{
            edge: "start",
            color: "inherit",
            "aria-label": "menu",
            "aria-haspopup": "true",
            onClick: handleDrawer,
          }}
        >
          <MenuIcon />
        </IconButton>
        <Drawer
          {...{
            anchor: "left",
            open: drawerOpen,
            onClose: handleDrawer,
          }}
        >
          <Typography variant="overline" className={classes.titleDrawer}>
            Menu
          </Typography>
          <Divider />
          <Link className={classes.drawerItem} to="/experience">
            Past experiences
          </Link>
          <Divider />
          <Link className={classes.drawerItem} to="/publications">
            Publications
          </Link>
          <Divider />
          <Link className={classes.drawerItem} to="/projects">
            Projects
          </Link>
          <Divider />
          <span className={classes.drawerItem} onClick={() => window.open('/files/cv.pdf')}>
            Download CV
          </span>
        </Drawer>
        <Link to="/" className={classes.title}>
          <Typography variant="overline" className={classes.titleChild}>
            <b>Nicolas Six</b>
          </Typography>
        </Link>
      </Toolbar>
    );
  };

  const displayDesktop = () => {
    return (
      <Toolbar>
        <Link to="/" className={classes.title}>
          <Typography variant="overline" className={classes.titleChild}>
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
    )
  }
  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.appBar}>
        { mobileView ? displayMobile() : displayDesktop() }
      </AppBar>
    </div>
  );
}