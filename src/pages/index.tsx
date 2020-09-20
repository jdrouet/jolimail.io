import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';
import Typography from '@material-ui/core/Typography';
import { PageProps } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';

import coWorkingSrc from '../images/co-working.svg';
import organizingSrc from '../images/organizing-projects.svg';
import letterSrc from '../images/letter.svg';

const useStyles = makeStyles((theme) => ({
  section: {
    marginTop: theme.spacing(30),
    marginBottom: theme.spacing(30),
  },
  hero: {
    textAlign: 'center',
  },
  howItWorks: {
    backgroundColor: theme.palette.background.default,
  },
  whyUse: {
    textAlign: 'center',
  },
  button: {
    marginTop: theme.spacing(3),
  },
  images: {
    maxWidth: '80%',
  },
  cell: {
    marginBottom: theme.spacing(6),
    [theme.breakpoints.down('xs')]: {
      textAlign: 'center',
    },
  },
}));

const IndexPage: React.FC<PageProps> = () => {
  const classes = useStyles();
  return (
    <Layout>
      <SEO title="Home" />
      <section className={[classes.section, classes.hero].join(' ')}>
        <Typography gutterBottom variant="h1">
          Beautiful email design
        </Typography>
        <Typography color="textSecondary" variant="subtitle1">
          Responsive transactional emails.
        </Typography>
        <Typography color="textSecondary" gutterBottom variant="subtitle1">
          Design, copy, send.
        </Typography>
        <Button
          className={classes.button}
          color="primary"
          href="https://github.com/jdrouet/jolimail"
          target="_blank"
          variant="contained"
        >
          Get started
        </Button>
      </section>
      <section className={[classes.section, classes.howItWorks].join(' ')}>
        <Grid container alignItems="center" spacing={3}>
          <Grid className={classes.cell} item xs={12}>
            <Typography align="center" gutterBottom variant="h2">
              How it works
            </Typography>
          </Grid>
          <Grid className={classes.cell} item xs={12} sm={6}>
            <Typography gutterBottom variant="h3">
              Design instantly
            </Typography>
            <Typography variant="body1">Create your template, get the result as you go.</Typography>
            <Typography variant="body1">You can now edit it.</Typography>
          </Grid>
          <Hidden xsDown>
            <Grid className={classes.cell} item xs={12} sm={6}>
              <img className={classes.images} src={coWorkingSrc} />
            </Grid>
          </Hidden>
          <Hidden xsDown>
            <Grid className={classes.cell} item xs={12} sm={6}>
              <img className={classes.images} src={organizingSrc} />
            </Grid>
          </Hidden>
          <Grid className={classes.cell} item xs={12} sm={6}>
            <Typography gutterBottom variant="h3">
              Change the content anytime
            </Typography>
            <Typography variant="body1">Change the content.</Typography>
            <Typography variant="body1">Add images, links, variables.</Typography>
          </Grid>
          <Grid className={classes.cell} item xs={12} sm={6}>
            <Typography gutterBottom variant="h3">
              Send
            </Typography>
            <Typography variant="body1">Use our open source sender to send your emails.</Typography>
            <Typography variant="body1">You keep control, you save time for your developers.</Typography>
            <Typography gutterBottom variant="body1">
              You users are happy because your emails are fast!
            </Typography>
            <Button
              className={classes.button}
              color="primary"
              href="https://github.com/jdrouet/catapulte"
              variant="contained"
            >
              Check it out on github
            </Button>
          </Grid>
          <Hidden xsDown>
            <Grid className={classes.cell} item xs={12} sm={6}>
              <img className={classes.images} src={letterSrc} />
            </Grid>
          </Hidden>
        </Grid>
      </section>
      <section className={[classes.section, classes.whyUse].join(' ')}>
        <Typography align="center" gutterBottom variant="h2">
          Why use jolimail?
        </Typography>
        <Typography align="center" gutterBottom variant="body1">
          Email templating is a pain.
        </Typography>
        <Typography align="center" gutterBottom variant="body1">
          It takes valuable designer's and developer's time, when they should be focusing on your product.
        </Typography>
        <Typography align="center" gutterBottom variant="body1">
          Existing products do not focus on transactional emails. Your customers are unhappy because their password
          reset, their confirmation emails, take time to get there.
        </Typography>
        <Typography align="center" gutterBottom variant="body1">
          Instead, have the stakeholder design the email herself. Use{' '}
          <a href="https://github.com/jdrouet/catapulte" target="_blank">
            our open source mailer
          </a>{' '}
          to send the emails. It's that simple.
        </Typography>
      </section>
    </Layout>
  );
};

export default IndexPage;
