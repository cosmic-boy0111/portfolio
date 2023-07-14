import * as React from 'react';
import Menu from '@mui/material/Menu';
import { IconButton, Tooltip } from '@mui/material';
import SpellcheckRoundedIcon from '@mui/icons-material/SpellcheckRounded';
import ControlledAccordions from './Accordian';


export default function BasicMenu() {
    const [anchorEl, setAnchorEl] = React.useState(null);


    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };



    return (
        <div>
            <Tooltip title="Sentence type" placement="left" >

                <IconButton
                    id="basic-button"
                    aria-controls={open ? 'basic-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                    onClick={handleClick}
                    style={{
                        color: 'rgba(255, 255, 255, 0.5)'
                    }} >
                     <SpellcheckRoundedIcon />
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
                            padding:'0'
                        },
                    }
                }
            >
                {/* <MenuItem > */}
                    <ControlledAccordions />
                {/* </MenuItem> */}

            </Menu>
        </div>
    );
}
