// Login.tsx
import React, { useState } from 'react';
import { Box, Typography, Button } from '@mui/material';
import TextInput from '../components/TextInput';
import Logo from '../components/Logo';

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async() => {
    console.log('Login clicked', { email, password });
    try {
      const response = await fetch('http://localhost:3000/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });
  
      if (response.ok) {
        const data = await response.json();
        console.log('Login successful:', data);
        // Handle successful login (e.g., save token, redirect to another page, etc.)
      } else {
        console.error('Login failed');
        // Handle failed login (e.g., show an error message to the user)
      }
    } catch (error) {
      console.error('Error:', error);
      // Handle error (e.g., network issues)
    }
  };

  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      height="100vh"
    >
      <Box bgcolor="#0E3B46" p={4} borderRadius={3} boxShadow={3} width={300}>
        <Logo />
        <Typography variant="h5" align="center" mb={2} style={{ color: '#FFFFFF' }}>
          Login
        </Typography>
        <TextInput label="E-mail" value={email} onChange={(e) => setEmail(e.target.value)} />
        <TextInput label="Senha" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <Button
          variant="contained"
          color="primary"
          fullWidth
          onClick={handleLogin}
          style={{ marginTop: '16px', backgroundColor: '#00C58E', borderRadius: 15, height:'40px' }}
        >
          Entrar
        </Button>
        <Typography align="center" variant="body2" mt={3} style={{ color: '#FFFFFF' }}>
          <a href="#" style={{ color: '#FFFFFF', textDecoration: 'none' }}>cadastre-se</a>
        </Typography>
      </Box>
    </Box>
  );
};

export default Login;
