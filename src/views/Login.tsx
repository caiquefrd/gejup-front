import React from 'react';
import LoginForm from '../components/LoginForm';
import { ThemeProvider } from '@emotion/react';
import theme from '../styles/theme';
import CssBaseline from '@mui/material/CssBaseline';
import '../index.css'


const Login: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline /> 
      <LoginForm />
    </ThemeProvider>
  );
};

export default Login;
