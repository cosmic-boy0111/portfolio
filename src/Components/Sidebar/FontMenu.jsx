import * as React from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { IconButton,Tooltip } from '@mui/material';
import FontDownloadRoundedIcon from '@mui/icons-material/FontDownloadRounded';
import { BodyContext } from '../Body';



export default function BasicMenu() {
    const [anchorEl, setAnchorEl] = React.useState(null);

    const {
        setFontStyle
    } = React.useContext(BodyContext)

    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleCloseSet = (val) => {
        setFontStyle(val);
        setAnchorEl(null);
    }


    const FontArray = [
        'Lato',
        'Montserrat',
        'Open Sans',
        'Raleway',
        'Roboto',
        'Source Code Pro',
        'Ubuntu'
    ]

    return (
        <div>
            <Tooltip title="Select font" placement="left" >

                <IconButton
                    id="basic-button"
                    aria-controls={open ? 'basic-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                    onClick={handleClick}
                    style={{
                        color: 'rgba(255, 255, 255, 0.5)'
                    }} >
                        <FontDownloadRoundedIcon />
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
                {
                    FontArray.map((e)=>{
                        return <MenuItem onClick={()=>handleCloseSet(e)} >
                            {e}
                        </MenuItem>
                    })
                }
                
            </Menu>
        </div>
    );
}
