import React from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { Box, Typography } from '@mui/material';

interface CalorieCounterProps {
  calories: number;  
  percentage: number;  
}

const CalorieCounter: React.FC<CalorieCounterProps> = ({ calories, percentage }) => {
  return (
    <Box display="flex" flexDirection="column" alignItems="center">
      <Box width={150} height={150}>
        <CircularProgressbar
          value={percentage}
          strokeWidth={10}
          styles={buildStyles({
            pathColor: '#04BF8A',  
            trailColor: '#E0E0E0',  
            strokeLinecap: 'round',  
          })}
        />
      </Box>
      <div style={{ padding: '20px', display: 'flex', justifyContent: 'center' }}>
      <Typography variant="h4" component="div" color="secondary" fontWeight={700} mt={-13} fontSize={16}>
        {calories} calorias
      </Typography>
      </div>
    </Box>
  );
};

export default CalorieCounter;
