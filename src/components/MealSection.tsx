import React from 'react';
import { Accordion, AccordionSummary, AccordionDetails, Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

interface MealSectionProps {
  title: string;
  children?: React.ReactNode;
}

const MealSection: React.FC<MealSectionProps> = ({ title, children }) => {
  return (
    <Accordion  sx={{ backgroundColor:'#E3DEDE', color:'secondary', width:'100%', borderRadius:'8px', boxShadow:8 }}>
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
