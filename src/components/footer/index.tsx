import React from 'react';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  root: {
    marginTop: '2rem',
  },
}));

const Footer: React.FC<{}> = () => {
  const classes = useStyles();
  return (
    <Toolbar className={classes.root}>
      <Typography color="textSecondary" variant="caption">
        © {new Date().getFullYear()} Jolimail
      </Typography>
    </Toolbar>
  );
};

export default Footer;
