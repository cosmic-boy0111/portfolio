import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import { BodyContext } from '../Body';

export default function RowRadioButtonsGroup() {

    const {setNormalType, normalType} = React.useContext(BodyContext)

    const [value, setValue] = React.useState(normalType);


    const handleChange = (event) => {
        setValue(event.target.value);
        setNormalType(event.target.value)
        localStorage.setItem('normalType', JSON.stringify(event.target.value));
    };

    return (
        <FormControl>
            <RadioGroup
                row
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="row-radio-buttons-group"
                value={value}
                onChange={handleChange}

            >
                <FormControlLabel value="small" control={<Radio sx={{
                    color: 'rgba(255, 255, 255, 0.5)'
                }} />} label="All Small" />
                <FormControlLabel value="capital" control={<Radio sx={{
                    color: 'rgba(255, 255, 255, 0.5)'
                }} />} label="All Capital" />
                <FormControlLabel value="mix" control={<Radio sx={{
                    color: 'rgba(255, 255, 255, 0.5)'
                }} />} label="Mix" />

            </RadioGroup>
        </FormControl>
    );
}
