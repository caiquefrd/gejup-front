import React, { useState } from "react";
import { Box, Typography, Button } from "@mui/material";
import TextInput from "../components/TextInput";
import Logo from "../components/Logo";
import { useNavigate } from "react-router-dom";
import theme from "../styles/theme";
import { ThemeProvider } from "@emotion/react";

const Login: React.FC = () => {
  const [mail, setmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    console.log("Login clicked", { mail, password });
    try {
      const response = await fetch("http://localhost:3000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ mail, password }),
      });

      if (response.ok) {
        const data = await response.json();
        console.log("Login successful:", data);
        const token = data.token;
        localStorage.setItem("authToken", token);
        navigate("/home");
      } else {
        console.error("Login failed");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleRegister = async () => {
    navigate("/register");
  };

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
          <Typography
            variant="h5"
            align="center"
            mb={2}
            style={{ color: "#FFFFFF" }}
          >
            Login
          </Typography>
          <TextInput
            label="E-mail"
            value={mail}
            onChange={(e) => setmail(e.target.value)}
          />
          <TextInput
            label="Senha"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button
            variant="contained"
            fullWidth
            onClick={handleLogin}
            size="medium"
            color="primary"
            style={{
              marginTop: "16px",
              backgroundColor: "#00C58E",
              borderRadius: 15,
              height: "30px",
            }}
          >
            Entrar
          </Button>
          <Button
            variant="text"
            fullWidth
            onClick={handleRegister}
            disableElevation
            size="small"
            color="primary"
            style={{
              marginTop: "20px",
              backgroundColor: "#0E3B46",
              borderRadius: 15,
              height: "20px",
            }}
          >
            Cadastre-se
          </Button>
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default Login;
