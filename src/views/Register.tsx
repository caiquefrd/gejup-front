import React from 'react';
import RegisterForm from '../components/RegisterForm'
import { ThemeProvider } from '@emotion/react';
import theme from '../styles/theme';
import { CssBaseline } from '@mui/material';
import { containerStyles } from '../styles/AppStyles';
import '../index.css'

const Register: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline /> 
      {/* <div style={containerStyles}> */}
      <RegisterForm />
    {/* </div> */}
    </ThemeProvider>
  );
};

export default Register;
