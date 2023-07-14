import React from 'react'
import logo from './AppLogo2.png'
import { Divider, IconButton, Tooltip } from '@mui/material'
import BasicMenu from './SizeMenu';
import FontMenu from './FontMenu';
import TypeMenu from './TypeMenu'
import ShareRoundedIcon from '@mui/icons-material/ShareRounded';
import { RWebShare } from "react-web-share";

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
            <RWebShare
                data={{
                    text: "check kr le mst web app hai typing ke liye!",
                    url: `https://master--typing-ka-kida.netlify.app`,
                    title: "Typing ka kida",
                }}
                onClick={() => console.log("shared successfully!")}
            >

                <Tooltip title="Share bhi kr de" placement="left" >

                    <IconButton style={{
                        color: 'rgba(255, 255, 255, 0.5)'
                    }} >
                        <ShareRoundedIcon />
                    </IconButton>
                </Tooltip>
            </RWebShare>
        </div>
    )
}
export default Sidebar
