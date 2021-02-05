import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { PageProps } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(15),
    marginBottom: theme.spacing(10),
  },
  button: {
    marginTop: theme.spacing(2),
  },
  cell: {
    marginBottom: theme.spacing(5),
    textAlign: 'center',
  },
}));

const DemoPage: React.FC<PageProps> = () => {
  const classes = useStyles();
  return (
    <Layout>
      <SEO title="Demo" />
      <Grid container className={classes.root} alignItems="center" justify="center" spacing={3}>
        <Grid className={classes.cell} item xs={12}>
          <Typography align="center" gutterBottom variant="h1">
            Show me what you got
          </Typography>
          <Typography align="center" variant="subtitle1">
            Let's give it a try...
          </Typography>
        </Grid>
        <Grid className={classes.cell} item xs={12}>
          <Typography align="center">The demo is composed of 3 services that are purged frequently</Typography>
        </Grid>
        <Grid className={classes.cell} item xs={12} sm={6}>
          <Typography align="center" variant="h3">
            The SMTP sandbox
          </Typography>
          <Typography align="center" gutterBottom variant="body1">
            Where the emails will be sent
          </Typography>
          <Button
            className={classes.button}
            color="primary"
            href="https://mock.jolimail.io"
            target="_blank"
            variant="contained"
          >
            Get me there
          </Button>
        </Grid>
        <Grid className={classes.cell} item xs={12} sm={6}>
          <Typography align="center" variant="h3">
            The catapulte service
          </Typography>
          <Typography align="center" gutterBottom variant="body1">
            That you can use to send emails
          </Typography>
          <Button
            className={classes.button}
            color="primary"
            href="https://catapulte.jolimail.io"
            target="_blank"
            variant="contained"
          >
            Is it running?
          </Button>
        </Grid>
        <Grid className={classes.cell} item xs={12} sm={6}>
          <Typography align="center" variant="h3">
            The Jolimail instance
          </Typography>
          <Typography align="center" gutterBottom variant="body1">
            Where you can design your templates
          </Typography>
          <Button
            className={classes.button}
            color="primary"
            href="https://demo.jolimail.io"
            target="_blank"
            variant="contained"
          >
            GO GO GO
          </Button>
        </Grid>
      </Grid>
    </Layout>
  );
};

export default DemoPage;
