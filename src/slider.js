import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Slider from '@material-ui/core/Slider';
import Typography from '@material-ui/core/Typography';

export default function CustomizedSlider() {
  const RangeSlider = withStyles({
    root: {
      color: '#00aadf',
      height: 8,
    },
    thumb: {
      height: 16,
      width: 16,
      border: '2px solid currentColor',
      marginTop: -6,
      marginLeft: -12,
      '&:focus,&:hover,&$active': {
        boxShadow: 'inherit',
      },
    },
    active: {},
    valueLabel: {
      color: 'green',
    },
    track: {
      height: 4,
      borderRadius: 4,
    },
    rail: {
      height: 4,
      borderRadius: 4,
      color: 'white'
    },
  })(Slider);

  return (
    <RangeSlider valueLabelDisplay="auto" defaultValue={[0, 20]} />
  );
}