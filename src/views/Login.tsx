import React from 'react';
import LoginForm from '../components/LoginForm';
import { ThemeProvider } from '@emotion/react';
import theme from '../styles/theme';
import { CssBaseline } from '@mui/material';
import '../index.css'

const Login: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline /> 
      <div style={{ backgroundColor: '#12181b', height: '100%', width:'100%' }}> 
      <LoginForm />
    </div>
    </ThemeProvider>
  );
};

export default Login;
