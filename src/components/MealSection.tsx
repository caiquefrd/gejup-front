import React from 'react';
import { Accordion, AccordionSummary, AccordionDetails, Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

interface MealSectionProps {
  title: string;
  children?: React.ReactNode;
}

const MealSection: React.FC<MealSectionProps> = ({ title, children }) => {
  return (
    <Accordion  sx={{ backgroundColor:'#F1ECEC', color:'secondary', width:'368px', borderRadius:'8px' }}>
      <AccordionSummary sx={{ color:'#024059'}} expandIcon={<ExpandMoreIcon sx={{color:'#024059'}}/>}>
        <Typography sx={{ fontWeight:'600' }}>{title}</Typography>
      </AccordionSummary>
      <AccordionDetails>
        {children}
      </AccordionDetails>
    </Accordion>
  );
};

export default MealSection;
