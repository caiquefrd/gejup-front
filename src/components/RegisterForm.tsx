import React, { useState } from 'react';
import { Box, Typography, Button } from '@mui/material';
import TextInput from '../components/TextInput';
import Logo from '../components/Logo';
import { ThemeProvider } from '@emotion/react';
import theme from '../styles/theme';
import { useNavigate } from "react-router-dom";


const Register: React.FC = () => {
  const [name, setName] = useState('');
  const [mail, setMail] = useState('');
  const [password, setPassword] = useState('');
  const [password_check, set_password_check] = useState('');
  const navigate = useNavigate();
  
  const handleRegister = async() => {
    console.log('Register', { mail, password })
    try {
      const response = await fetch('http://localhost:3000/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, mail, password }),
      });
  
      if (response.ok && password == password_check) {
        const data = await response.json();
        console.log('Register successful:', data);
        navigate("/")
      } else {
        const errorData = await response.json();
        console.error('Register failed', errorData);  
        }
    } catch (error) {
      console.error('Error:', error);
        }
  };

  const handleNavLogin = async () => {
    navigate("/")
  }

  return (
    <ThemeProvider theme={theme}>
      <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      height="100vh"
    >
      <Box bgcolor="#0E3B46" p={4} borderRadius={8} boxShadow={3} width={300}>
        <Logo />
        <Typography variant="h5" align="center" mb={2} style={{ color: '#FFFFFF' }}>
          Cadastro
        </Typography>
        <TextInput label="Nome" value={name} onChange={(e) => setName(e.target.value)} />
        <TextInput label="E-mail" value={mail} onChange={(e) => setMail(e.target.value)} />
        <TextInput label="Senha" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <TextInput label="Confirme sua senha" type="password" value={password_check} onChange={(e) => set_password_check(e.target.value)} />
        <Button
          variant="contained"
          color="primary"
          fullWidth
          onClick={handleRegister}
          style={{ marginTop: '16px', backgroundColor: '#00C58E', borderRadius: 15, height:'30px' }}
        >
          Cadastrar-se
        </Button>
        <Typography mt={2} style={{ color: '#FFFFFF' }} align="center">
          Ja tem uma conta? Faça login
          <Button onClick={handleNavLogin} style={{height:'2px', width:'2px', backgroundColor: "#0E3B46",}} >
            aqui
          </Button>
        </Typography>
      </Box>
    </Box>
    </ThemeProvider>
  );
};

export default Register;
