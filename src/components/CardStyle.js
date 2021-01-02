import React from 'react';

import Grid from '@material-ui/core/Grid';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import IconButton from '@material-ui/core/IconButton';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';

const useStyles = makeStyles((theme) => ({
  cardWidth: {
    maxWidth: 350,
    margin: 'auto',
  },
  media: {
    height: 250,
  },
  defaultBtn: {
    minWidth: 'auto',
    padding: '5px 15px',
    borderRadius: 0,
  },
  root: {
    margin: 'auto',
    display: 'flex',
    maxWidth: 320,
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    flex: '1 0 auto',
  },
  cover: {
    width: 160,
  },
  controls: {
    display: 'flex',
    alignItems: 'center',
    paddingLeft: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
  playIcon: {
    height: 38,
    width: 38,
  },
  venueCard: {
    display: 'flex',
    maxWidth: 800,
  },
  venueImg: {
    height: 200,
    width: 400,
  },
  locationIcon: {
    height: 15,
    width: 15,
  },
  icon: {
    fontSize: '30px',
    color: 'black',
    backgroundColor: 'white',
    borderRadius: '50%',
    padding: '10px',
    margin: '5px',
    cursor: 'pointer',
  },
}));

const CardStyle = () => {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <Grid container direction='row' justify='center'>
      <Grid item container justify='center' alignItems='center' spacing={3}>
        <Grid item xs={12}>
          <Typography variant='h5' component='h2' align='center' gutterBottom>
            Card component made by Sujan
          </Typography>
        </Grid>
        <Grid item xs={12} md={4}>
          <Card className={classes.cardWidth}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image='https://static.toiimg.com/photo/53110049.cms'
                title='Pizza'
              />
              <CardContent>
                <Typography gutterBottom variant='h5' component='h2'>
                  Pizza
                </Typography>
                <Typography variant='body2' color='textSecondary' component='p'>
                  Pizza is a savory dish of Italian origin consisting of a
                  usually round, flattened base of leavened wheat-based dough
                  topped with tomatoes, cheese, and many other ingredients.
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button
                size='small'
                color='primary'
                className={classes.defaultBtn}
              >
                Share
              </Button>
              <Button
                size='small'
                color='primary'
                className={classes.defaultBtn}
              >
                Learn More
              </Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={12} md={4}>
          <Card className={classes.root}>
            <div className={classes.details}>
              <CardContent className={classes.content}>
                <Typography component='h5' variant='h5'>
                  We Are (One Piece)
                </Typography>
                <Typography variant='subtitle1' color='textSecondary'>
                  Hiroshi Kitadani
                </Typography>
              </CardContent>
              <div className={classes.controls}>
                <IconButton aria-label='previous'>
                  {theme.direction === 'rtl' ? (
                    <SkipNextIcon />
                  ) : (
                    <SkipPreviousIcon />
                  )}
                </IconButton>
                <IconButton aria-label='play/pause'>
                  <PlayArrowIcon className={classes.playIcon} />
                </IconButton>
                <IconButton aria-label='next'>
                  {theme.direction === 'rtl' ? (
                    <SkipPreviousIcon />
                  ) : (
                    <SkipNextIcon />
                  )}
                </IconButton>
              </div>
            </div>
            <CardMedia
              className={classes.cover}
              image='https://media.customon.com/unsafe/600x600/img.customon.com//art/2/600/600/0a0909/40193/82ae33cf56ff0d36f2a7bccd579de3e7.png.jpg'
              title='One Piece Opening Song'
            />
          </Card>
        </Grid>
        <Grid item xs={12} md={4}>
          <Card className={classes.cardWidth}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image='https://static.toiimg.com/photo/53110049.cms'
                title='Pizza'
              />
            </CardActionArea>
            <Button
              color='primary'
              fullWidth='true'
              variant='contained'
              style={{ borderRadius: 0 }}
            >
              Order now
            </Button>
          </Card>
        </Grid>
        <Grid item xs={12} md={6}>
          <Card className={classes.venueCard}>
            <CardMedia
              className={classes.venueImg}
              image='http://bagaichahk.com/wp-content/uploads/2016/12/restaurant2.jpg'
            />
            <div className={classes.details}>
              <CardContent className={classes.content}>
                <Typography component='h5' variant='h5'>
                  Royal Hotel and Banquet
                </Typography>
                <Typography variant='subtitle1' color='textSecondary'>
                  {<LocationOnIcon className={classes.locationIcon} />}{' '}
                  Kathmandu, Nepal
                </Typography>
                <Typography variant='body2'>
                  A five start hotel of Nepal. Lorem ipsum dolor sit amet
                  consectetur, adipisicing elit. Nam, et.
                </Typography>
                <CardActions>
                  <Button variant='outlined' color='secondary'>
                    Visit website
                  </Button>
                  <Button variant='contained' color='secondary'>
                    Book Now
                  </Button>
                </CardActions>
              </CardContent>
            </div>
          </Card>
        </Grid>
        <Grid item xs={12} md={6}>
          <Card className={classes.cardWidth}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image='https://i1.sndcdn.com/avatars-000587714706-vjdrog-t500x500.jpg'
                title='Pizza'
              />
              <CardContent align='center'>
                <Typography gutterBottom variant='h5' component='h2'>
                  Monkey D. Luffy
                </Typography>
                <Typography
                  gutterBottom
                  variant='subtitle1'
                  component='h6'
                  color='textSecondary'
                >
                  Future King of Pirates
                </Typography>
                <Typography variant='body2' color='textSecondary' component='p'>
                  Luffy is usually recognizable by his straw hat, a gift from
                  "Red-Haired" Shanks. In his early childhood, he wears a white
                  shirt and blue shorts. The character has a scar under his left
                  eye from stabbing himself to demonstrate his courage to Shanks
                  and his crew.
                </Typography>
              </CardContent>
            </CardActionArea>
            <div style={{ textAlign: 'center' }}>
              <FacebookIcon className={classes.icon} />
              <InstagramIcon className={classes.icon} />
              <TwitterIcon className={classes.icon} />
            </div>
          </Card>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default CardStyle;
