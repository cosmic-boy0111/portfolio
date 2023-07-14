import React from 'react'
import logo from './AppLogo2.png'
import { Divider} from '@mui/material'
import BasicMenu from './SizeMenu';
import FontMenu from './FontMenu';
import TypeMenu from './TypeMenu'

const Sidebar = () => {
    return (
        <div style={{
            height: '100%',
            width: '50px',
            backgroundColor: 'rgba(255, 255, 255, 0.08)',
            display: 'flex',
            alignItems: 'center',
            flexDirection: 'column',
            borderRadius: '10px 0px 0px 10px'
            // padding:'1rem 0'
        }} >
            <img src={logo} alt="" srcset="" style={{
                width: '30px',
                paddingTop: '1rem'
            }} />
            <Divider style={{ marginBottom: '1rem' }} />
            <BasicMenu />
            <FontMenu />
            <TypeMenu />
           
            {/* <Tooltip title="Delete history" placement="left" >

                <IconButton style={{
                    color: 'rgba(255, 255, 255, 0.5)'
                }} >
                    <AutoDeleteRoundedIcon />
                </IconButton>
            </Tooltip> */}
        </div>
    )
}
export default Sidebar
