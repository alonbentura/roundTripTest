import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Slider from '@material-ui/core/Slider';


export default function CustomizedSlider(props) {
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
      top: 22,
      '& *': {
        background: 'transparent',
        color: 'white',
        fontWeight: 600
      },
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

  const rangeSorted = props.range.sort(function (a, b) {
    return a - b;
  });
  let min = Number(rangeSorted[0])
  let max = Number(rangeSorted[rangeSorted.length - 1])

  return (
    <RangeSlider valueLabelDisplay="on" max={max} min={min} defaultValue={[min, max]}  onChangeCommitted={props.onChangeRange} />
  );
}