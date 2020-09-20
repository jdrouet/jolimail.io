import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Footer from '../footer';
import Header from '../header';

const useStyles = makeStyles(() => ({
  root: {
    margin: '56px auto 0',
    maxWidth: 960,
    padding: '0 1.0875rem 1.45rem',
  },
}));

const Layout: React.FC<{ children: any }> = ({ children }) => {
  const classes = useStyles();

  return (
    <>
      <Header />
      <div className={classes.root}>{children}</div>
      <Footer />
    </>
  );
};

export default Layout;
