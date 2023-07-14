import { Checkbox } from '@mui/material'
import React from 'react'
import { BodyContext } from '../Body';

const CheckBox = ({lang , selected}) => {

    const {
        programmingArray,setProgrammingArray
    } = React.useContext(BodyContext)

    const handleChange = (event) => {
        const checkSelected = event.target.checked;
        if(checkSelected === false){
            let checkCount  = 0;
            programmingArray.forEach((e)=>{
                checkCount += e.selected ? 1 : 0;
            })
            if(checkCount === 1) return;
        }
        setProgrammingArray(()=>{
            var arr = [];
            programmingArray.forEach(element => {
                if(element.lang === lang){
                    arr.push({
                        lang : lang,
                        selected : checkSelected
                    })
                }else{
                    arr.push(element);
                }
            });
            console.log(arr);
            localStorage.setItem('programmingArray',JSON.stringify(arr));
            return arr;
        })
    };
    return (
        <div style={{
            display:'flex',
            alignItems:'center',
            marginRight:'.5rem'
        }} >
            <Checkbox
                sx={{
                    color:'rgba(255, 255, 255, 0.5)'
                }}
                checked={selected}
                onChange={handleChange}
                inputProps={{ 'aria-label': 'controlled' }}
            />
            <span> {lang} </span>
        </div>
    )
}

export default CheckBox
