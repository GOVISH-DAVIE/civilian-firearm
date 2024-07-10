import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Button from '@mui/material/Button';
import Review from '../Review';

export default function MyArmoury() {
  return (
    <div>
     
      
      <Accordion defaultExpanded>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3-content"
          id="panel3-header"
        >
          Glock 17 Gen 4
        </AccordionSummary>
        <AccordionDetails>
          <Review />
        </AccordionDetails> 
      </Accordion>
    </div>
  );
}