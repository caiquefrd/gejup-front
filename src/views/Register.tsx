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
      <RegisterForm />
    </ThemeProvider>
  );
};

export default Register;
