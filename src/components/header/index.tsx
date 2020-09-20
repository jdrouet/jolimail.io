import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import { Button as GatsbyButton } from 'gatsby-theme-material-ui';
import Toolbar from '@material-ui/core/Toolbar';
import { makeStyles } from '@material-ui/core/styles';
import logoSrc from '../../images/logo.svg';

const useStyles = makeStyles((theme) => ({
  root: {},
  toolbar: {
    maxWidth: 960 + theme.spacing(4),
    margin: '0 auto',
    width: '100%',
  },
  logo: {
    maxHeight: theme.spacing(4),
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
  grow: {
    flex: 1,
  },
}));

export type HeaderProps = {};

const Header: React.FC<HeaderProps> = () => {
  const classes = useStyles();
  return (
    <AppBar color="inherit" position="fixed">
      <Toolbar className={classes.toolbar}>
        <img className={classes.logo} src={logoSrc} />
        <div className={classes.grow} />
        <Button href="https://github.com/jdrouet/jolimail" target="_blank">
          Documentation
        </Button>
        <GatsbyButton to="/demo">Demo</GatsbyButton>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
