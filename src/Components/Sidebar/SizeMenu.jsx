import * as React from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { IconButton, Switch, Tooltip } from '@mui/material';

import TuneRoundedIcon from '@mui/icons-material/TuneRounded';
import SliderSizes from './Slider';
import { BodyContext } from '../Body';

export default function BasicMenu() {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };


    const {
        fontSize, setFontSize,
        lineHeight, setLineHeight,
        words, setWords,
        random, setRandom,
    } = React.useContext(BodyContext)

    return (
        <div>
            <Tooltip title="Size setting" placement="left" >

                <IconButton
                    id="basic-button"
                    aria-controls={open ? 'basic-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                    onClick={handleClick}
                    style={{
                        color: 'rgba(255, 255, 255, 0.5)'
                    }} >
                    <TuneRoundedIcon />
                </IconButton>
            </Tooltip>
            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    'aria-labelledby': 'basic-button',
                }}
                sx={
                    {
                        "& .MuiMenu-paper":
                        {
                            backgroundColor: "rgb(34, 43, 54)",
                            // boxShadow:'none'
                            color: 'rgba(255, 255, 255, 0.5)',
                        },
                    }
                }
            >
                <MenuItem >
                    <div style={{
                        display: 'flex',
                        flexDirection: 'column',
                        width: '100%'
                    }} >

                        <div>Font size</div>
                        <SliderSizes min={10} max={40} defaultValue={fontSize} action={setFontSize} target={'fontSize'}
                         />
                    </div>
                </MenuItem>
                <MenuItem >
                    <div style={{
                        display: 'flex',
                        flexDirection: 'column'
                    }} >

                        <div>Line height</div>
                        <SliderSizes min={1} max={10} defaultValue={lineHeight} action={setLineHeight} target={'lineHeight'} />
                    </div>
                </MenuItem>
                <MenuItem >
                    <div style={{
                        display: 'flex',
                        flexDirection: 'column'
                    }} >

                        <div>Words in sentence</div>
                        <SliderSizes min={10} max={50} defaultValue={words} action={setWords} target={'words'} />
                    </div>
                </MenuItem>
                <MenuItem >
                    <div style={{
                        display: 'flex',
                        flexDirection: 'column'
                    }} >

                        <small>Activate random Words</small>
                        <small> in sentence from selected range</small>
                        <Switch color='primary' defaultChecked={random} onClick={()=> {
                            setRandom(!random)
                            localStorage.setItem('random', JSON.stringify(!random));
                        }} />
                    </div>
                </MenuItem>
            </Menu>
        </div>
    );
}
