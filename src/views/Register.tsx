import React from 'react';
import RegisterForm from '../components/RegisterForm'
import { ThemeProvider } from '@emotion/react';
import theme from '../styles/theme';
import { CssBaseline } from '@mui/material';
import '../index.css'

const Register: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline /> 
      <div style={{ backgroundColor: '#12181b', height: '100%', width:'100%' }}> 
      <RegisterForm />
    </div>
    </ThemeProvider>
  );
};

export default Register;
