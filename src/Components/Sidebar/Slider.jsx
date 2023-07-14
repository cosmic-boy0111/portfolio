import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';

export default function SliderSizes({min,max,defaultValue, action, target}) {


    const handleChange = (e) => {
        const value = e.target.value;
        console.log(value);
        action(value);
        localStorage.setItem(target,JSON.stringify(value));
      
    }

  return (
    <Box width={200}>
      <Slider
        size="small"
        defaultValue={defaultValue}
        aria-label="Small"
        valueLabelDisplay="auto"
        min={min}
        max={max}
        onChange={handleChange}
      />
      {/* <Slider defaultValue={50} aria-label="Default" valueLabelDisplay="auto" /> */}
    </Box>
  );
}
