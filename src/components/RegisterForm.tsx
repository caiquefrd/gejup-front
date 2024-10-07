import React, { useState } from 'react';
import { Box, Typography, Button } from '@mui/material';
import TextInput from '../components/TextInput';
import Logo from '../components/Logo';

const Register: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = async() => {
    console.log('Registred', { username, password });
    try {
      const response = await fetch('http://localhost:3000/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });
  
      if (response.ok) {
        const data = await response.json();
        console.log('Register successful:', data);
      } else {
        console.error('Register failed');
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
      <Box bgcolor="#0E3B46" p={4} borderRadius={8} boxShadow={3} width={300}>
        <Logo />
        <Typography variant="h5" align="center" mb={2} style={{ color: '#FFFFFF' }}>
          Cadastrar
        </Typography>
        <TextInput label="E-mail" value={username} onChange={(e) => setUsername(e.target.value)} />
        <TextInput label="Senha" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <Button
          variant="contained"
          color="primary"
          fullWidth
          onClick={handleRegister}
          style={{ marginTop: '16px', backgroundColor: '#00C58E', borderRadius: 15, height:'40px' }}
        >
          Cadastre-se
        </Button>
      </Box>
    </Box>
  );
};

export default Register;
