import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';

import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import HomeIcon from '@material-ui/icons/Home';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import GrainIcon from '@material-ui/icons/Grain';

const useStyles = makeStyles((theme) => ({
  link: {
    display: 'flex',
  },
  icon: {
    marginRight: theme.spacing(0.5),
    width: 20,
    height: 20,
  },
  styledbreadcrumb: {
    display: 'flex',
    backgroundColor: '#de8735',
    color: 'white',
    fontWeight: 'bold',
    padding: '5px 20px',
    borderRadius: '50px',
    border: '3px solid #bf732c',
  },
}));

function handleClick(event) {
  event.preventDefault();
  alert('You clicked a breadcrumb.');
}

const BreadcrumbStyle = () => {
  const classes = useStyles();
  return (
    <Grid container direction='row'>
      <Grid item container direction='column' justify='center' spacing={2}>
        <Grid item>
          <Typography variant='h5' component='h2' align='center'>
            Breadcrumb component made by Sujan
          </Typography>
        </Grid>
        <Grid item>
          <Breadcrumbs aria-label='breadcrumb'>
            <Link color='inherit' href='/' onClick={handleClick}>
              Home
            </Link>
            <Link color='inherit' href='/navbar' onClick={handleClick}>
              Navbar
            </Link>
            <Typography color='textPrimary'>Breadcrumb</Typography>
          </Breadcrumbs>
        </Grid>
        <Grid item>
          <Breadcrumbs
            separator={<NavigateNextIcon fontSize='small' />}
            aria-label='breadcrumb'
          >
            <Link color='inherit' href='/' onClick={handleClick}>
              Home
            </Link>
            <Link color='inherit' href='/navbar' onClick={handleClick}>
              Navbar
            </Link>
            <Typography color='textPrimary'>Breadcrumb</Typography>
          </Breadcrumbs>
        </Grid>
        <Grid item>
          <Breadcrumbs aria-label='breadcrumb'>
            <Link
              color='inherit'
              href='/'
              onClick={handleClick}
              className={classes.link}
            >
              <HomeIcon className={classes.icon} />
              Home
            </Link>
            <Link
              color='inherit'
              href='/getting-started/installation/'
              onClick={handleClick}
              className={classes.link}
            >
              <WhatshotIcon className={classes.icon} />
              Navbar
            </Link>
            <Typography color='textPrimary' className={classes.link}>
              <GrainIcon className={classes.icon} />
              Breadcrumb
            </Typography>
          </Breadcrumbs>
        </Grid>
        <Grid item>
          <Breadcrumbs maxItems={2} aria-label='breadcrumb'>
            <Link color='inherit' onClick={handleClick}>
              Home
            </Link>
            <Link color='inherit' onClick={handleClick}>
              Venues
            </Link>
            <Link color='inherit' onClick={handleClick}>
              Meeting
            </Link>
            <Link color='inherit' onClick={handleClick}>
              Kathmandu
            </Link>
            <Typography color='textPrimary'>Venue5</Typography>
          </Breadcrumbs>
        </Grid>
        <Grid item>
          <Breadcrumbs aria-label='breadcrumb'>
            <Link
              color='inherit'
              href='/'
              onClick={handleClick}
              className={classes.styledbreadcrumb}
            >
              <HomeIcon className={classes.icon} />
              Home
            </Link>
            <Link
              color='inherit'
              href='/getting-started/installation/'
              onClick={handleClick}
              className={classes.styledbreadcrumb}
            >
              <WhatshotIcon className={classes.icon} />
              Navbar
            </Link>
            <Typography
              color='textPrimary'
              className={classes.styledbreadcrumb}
            >
              <GrainIcon className={classes.icon} />
              Breadcrumb
            </Typography>
          </Breadcrumbs>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default BreadcrumbStyle;
