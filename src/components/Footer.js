import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import YouTubeIcon from '@material-ui/icons/YouTube';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';

const useStyles = makeStyles((theme) => ({
  firstFooter: {
    backgroundColor: '#222222',
    color: 'white',
    padding: '50px 120px',
    [theme.breakpoints.down('md')]: {
      padding: '30px',
    },
  },
  horizontal: {
    width: '100%',
    marginTop: '10px',
  },
  btn: {
    minWidth: 'auto',
    color: '#cccccc',
    textTransform: 'capitalize',
    fontWeight: 'normal',
  },
  secondFooter: {
    padding: '40px 0',
    backgroundColor: '#262254',
  },
  icon: {
    fontSize: '30px',
    color: 'black',
    backgroundColor: 'white',
    borderRadius: '50%',
    padding: '10px',
    margin: '5px',
  },
  center: {
    textAlign: 'center',
    backgroundColor: '#262254',
    color: 'white',
  },
  links: {
    display: 'inline',
    margin: '5px',
  },
  thirdFooter: {
    color: '#cccccc',
    backgroundColor: '#212121',
    fontFamily: 'Roboto',
    padding: '50px 0',
    fontWeight: 100,
  },
  listTitle: {
    color: 'white',
    fontWeight: 'normal',
    fontSize: '17px',
  },
  fourthFooter: {
    backgroundColor: '#fafbfc',
    fontFamily: 'Roboto',
    color: '#959da5',
    fontSize: '12px',
    padding: '20px 0',
  },
  fifthFooter: {
    backgroundColor: '#761B25',
    color: 'white',
    padding: '20px 0',
  },
}));

const Footer = () => {
  const classes = useStyles();

  const fstFooterComp = () => {
    return (
      <Grid item md={4} xs={12}>
        <Typography variant='h6' component='h2'>
          Discover Medium
        </Typography>
        <Typography variant='body2' component='p'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium
          quam sapiente laborum voluptate debitis illum nam quas dolores minima
          repellat quia.
        </Typography>
      </Grid>
    );
  };

  const thirdFooterComp = () => {
    return (
      <Grid container justify='center' className={classes.thirdFooter}>
        <Grid container sm={12} md={8} spacing={3}>
          <Grid item container md={3}>
            <Typography variant='body1' className={classes.listTitle}>
              Material UI
            </Typography>
          </Grid>
          <Grid item md={3}>
            <Grid container direction='column' spacing={1}>
              <Grid item className={classes.listTitle}>
                Community
              </Grid>
              <Grid item>Github</Grid>
              <Grid item>Twitter</Grid>
              <Grid item>StackOverflow</Grid>
              <Grid item>Team</Grid>
            </Grid>
          </Grid>
          <Grid item md={3}>
            <Grid container direction='column' spacing={1}>
              <Grid item className={classes.listTitle}>
                Resources
              </Grid>
              <Grid item>Support</Grid>
              <Grid item>Blog</Grid>
              <Grid item>Material Icons</Grid>
            </Grid>
          </Grid>
          <Grid item md={3}>
            <Grid container direction='column' spacing={1}>
              <Grid item className={classes.listTitle}>
                Company
              </Grid>
              <Grid item>About</Grid>
              <Grid item>Contact Us</Grid>
              <Grid item>Jobs</Grid>
            </Grid>
          </Grid>
          <Grid item md={12}>
            Currently v4.11.1. Released under the MIT License. Copyright © 2021
            Material-UI.
          </Grid>
        </Grid>
      </Grid>
    );
  };

  const fourthFooterComponent = () => {
    return (
      <div className={classes.fourthFooter}>
        <Grid
          container
          justify='space-between'
          style={{ width: '85%', margin: 'auto' }}
        >
          <Grid container md={4} spacing={1}>
            <Grid item>© 2021 GitHub, Inc.</Grid>
            <Grid item>Terms</Grid>
            <Grid item>Privacy</Grid>
            <Grid item>SiteMap</Grid>
            <Grid item>What is git?</Grid>
          </Grid>
          <Grid container md={2} spacing={1} justify='flex-end'>
            <Grid item>
              <TwitterIcon />
            </Grid>
            <Grid item>
              <FacebookIcon />
            </Grid>
            <Grid item>
              <LinkedInIcon />
            </Grid>
            <Grid item>
              <YouTubeIcon />
            </Grid>
            <Grid item>
              <GitHubIcon />
            </Grid>
          </Grid>
        </Grid>
      </div>
    );
  };

  const fifthFooter = () => {
    return (
      <Grid container justify='center' className={classes.fifthFooter}>
        <Grid container xs={12} md={6} justify='space-between'>
          <Grid item>
            <TwitterIcon className={classes.icon} />
          </Grid>
          <Grid item>
            <FacebookIcon className={classes.icon} />
          </Grid>
          <Grid item>
            <LinkedInIcon className={classes.icon} />
          </Grid>
          <Grid item>
            <YouTubeIcon className={classes.icon} />
          </Grid>
          <Grid item>
            <GitHubIcon className={classes.icon} />
          </Grid>
        </Grid>
        <Grid container md={12} justify='center'>
          <Typography variant='body1'>@Copyright Sujan Paudel</Typography>
        </Grid>
      </Grid>
    );
  };

  return (
    <div>
      <Grid container className={classes.firstFooter}>
        <Grid item container direction='row' justify='space-around' spacing={4}>
          {fstFooterComp()}
          {fstFooterComp()}
          {fstFooterComp()}
        </Grid>
        <Grid item container direction='row' justify='space-between'>
          <Grid item>
            <Typography variant='h3' component='h1'>
              Sujan
            </Typography>
          </Grid>
          <Grid item>
            <Button className={classes.btn}>About</Button>
            <Button className={classes.btn}>Help</Button>
            <Button className={classes.btn}>Legal</Button>
          </Grid>
        </Grid>
      </Grid>
      <br />
      <Grid
        container
        direction='row'
        justify='center'
        alignItems='center'
        className={classes.secondFooter}
      >
        <Grid item sm={6}>
          <Grid container direction='column'>
            <Grid item className={classes.center}>
              <FacebookIcon className={classes.icon} />
              <InstagramIcon className={classes.icon} />
              <TwitterIcon className={classes.icon} />
            </Grid>
            <Grid item className={classes.center}>
              <Typography className={classes.links}>Info</Typography>
              <Typography className={classes.links}>Marketing</Typography>
              <Typography className={classes.links}>Support</Typography>
            </Grid>
            <Grid item className={classes.center}>
              <Typography className={classes.links}>Terms of use</Typography>
              <Typography className={classes.links}>Privacy Policy</Typography>
            </Grid>
            <Grid item className={classes.center}>
              <Typography>@Copyright 2020</Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <br />
      {thirdFooterComp()}
      <br />
      {fourthFooterComponent()}
      <br />
      {fifthFooter()}
    </div>
  );
};

export default Footer;
