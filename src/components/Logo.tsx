// Logo.tsx
import React from 'react';
import { Box, Typography } from '@mui/material';

const Logo: React.FC = () => {
  return (
    <Box textAlign="center" mb={2}>
      <Typography variant="h3" component="div" fontWeight="bold">
        <span style={{ color: '#0C5A6E' }}>GEJ</span>
        <span style={{ color: '#00C58E' }}>UP</span>
      </Typography>
    </Box>
  );
};

export default Logo;
