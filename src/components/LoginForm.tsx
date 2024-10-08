import React, { useState } from 'react';
import { Box, Typography, Button } from '@mui/material';
import TextInput from '../components/TextInput';
import Logo from '../components/Logo';
import { useNavigate } from 'react-router-dom';

const Login: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async() => {
    const navigate = useNavigate();
    console.log('Login clicked', { username, password });
    try {
      const response = await fetch('http://localhost:3000/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });
  
      if (response.ok) {
        const data = await response.json();
        console.log('Login successful:', data);
        navigate('/home')
      } else {
        console.error('Login failed');
        }
    } catch (error) {
      console.error('Error:', error);
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
        <TextInput label="E-mail" value={username} onChange={(e) => setUsername(e.target.value)} />
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
