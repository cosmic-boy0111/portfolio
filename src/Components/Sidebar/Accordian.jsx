import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import CheckBox from './CheckBox';
import { BodyContext } from '../Body';
import RowRadioButtonsGroup from './RadioGroup';

export default function ControlledAccordions() {
  const [expanded, setExpanded] = React.useState(false);

  const {setSentenceType} = React.useContext(BodyContext)

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
    setSentenceType(panel === "panel1" ? 'programming' : 'normal')
    localStorage.setItem('sentenceType', JSON.stringify(panel === "panel1" ? 'programming' : 'normal'))
  };

  const {
    programmingArray
  } = React.useContext(BodyContext)

  return (
    <div>
      <Accordion sx={{
        backgroundColor:'transparent',
        border:'none',
        boxShadow:"none",
        color: 'rgba(255, 255, 255, 0.5)'
      }}  expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography sx={{ width: '33%', flexShrink: 0 }}>
            Programming
          </Typography>
          
        </AccordionSummary>
        <AccordionDetails sx={{
            display:'inline-flex',
            width: "80%",
            flexWrap:'wrap'
        }} >

            {
                programmingArray.map((e)=>{
                    return <CheckBox lang={e.lang} selected={e.selected} />
                })

            }
        </AccordionDetails>
      </Accordion>
      <Accordion sx={{
        backgroundColor:'transparent',
        border:'none',
        boxShadow:"none",
        color: 'rgba(255, 255, 255, 0.5)'
      }} expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >
          <Typography sx={{ width: '33%', flexShrink: 0 }}>Normal</Typography>
          
        </AccordionSummary>
        <AccordionDetails>
            <RowRadioButtonsGroup />
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
