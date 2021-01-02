import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';

import 'date-fns';
import DateFnsUtils from '@date-io/date-fns';

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: 10,
  },
  root: {
    width: 300,
  },
}));

function valuetext(value) {
  return `${value}°C`;
}

const InputStyle = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState([20, 30]);
  const [gender, setGender] = React.useState('female');
  const [age, setAge] = React.useState('');

  const [selectedDate, setSelectedDate] = React.useState(
    new Date('2020-08-18T21:11:54')
  );

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleAgeChange = (event) => {
    setAge(event.target.value);
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleGenderChange = (event) => {
    setGender(event.target.value);
  };
  return (
    <Grid container>
      <Grid item xs={12}>
        <Typography variant='h5' component='h2' align='center' gutterBottom>
          Input component made by Sujan
        </Typography>
      </Grid>
      <Grid container direction='row' justify='center'>
        <Grid item xs={12} md={4}>
          <TextField
            className={classes.margin}
            id='standard-basic'
            label='Standard'
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <TextField
            className={classes.margin}
            id='filled-basic'
            label='Filled'
            variant='filled'
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <TextField
            className={classes.margin}
            id='outlined-basic'
            label='Outlined'
            variant='outlined'
          />
        </Grid>
      </Grid>
      <div className={classes.margin}>
        <div className={classes.root}>
          <Typography id='range-slider' gutterBottom>
            Temperature range
          </Typography>
          <Slider
            value={value}
            onChange={handleChange}
            valueLabelDisplay='auto'
            aria-labelledby='range-slider'
            getAriaValueText={valuetext}
          />
        </div>
        <FormControl component='fieldset'>
          <FormLabel component='legend'>Gender</FormLabel>
          <RadioGroup
            aria-label='gender'
            name='gender1'
            value={gender}
            onChange={handleGenderChange}
          >
            <FormControlLabel
              value='female'
              control={<Radio />}
              label='Female'
            />
            <FormControlLabel value='male' control={<Radio />} label='Male' />
            <FormControlLabel value='other' control={<Radio />} label='Other' />
          </RadioGroup>
        </FormControl>
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <Grid container justify='space-around'>
            <KeyboardDatePicker
              disableToolbar
              variant='inline'
              format='MM/dd/yyyy'
              margin='normal'
              id='date-picker-inline'
              label='Date picker inline'
              value={selectedDate}
              onChange={handleDateChange}
              KeyboardButtonProps={{
                'aria-label': 'change date',
              }}
            />
          </Grid>
        </MuiPickersUtilsProvider>
        <FormControl className={classes.root}>
          <InputLabel id='select-label'>Age</InputLabel>
          <Select
            labelId='select-label'
            id='simple-select'
            value={age}
            onChange={handleAgeChange}
          >
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>
      </div>
    </Grid>
  );
};

export default InputStyle;
