import React, { useEffect, useState } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';  
import theme from '../styles/theme';  
import CalorieCounter from '../components/CalorieCounter';
import AddMealButton from '../components/AddMealButton';
import MealSection from '../components/MealSection';
import MacroProgressBar from '../components/MacroProgressBar';
import { containerStyles } from '../styles/AppStyles';
import { Card, CardContent } from '@mui/material';
import SideBar from '../components/SideBar';
import { useNavigate } from 'react-router-dom'; // For redirection

const Home: React.FC = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('authToken');
    console.log('ohayo')
    console.log(token); //retornando null
    if (token) {
      fetch('http://localhost:3000/protected', {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
          },
        })
        .then(response => {
          if (!response.ok) {
            console.log('caiu')  
            throw new Error('Failed to fetch the protected resource');
          }
          return response.json();
        })
        .then(data => {
          setData(data);
        })
        .catch(error => {
          setError(error.message);
        });
    }
  }, [navigate]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <SideBar></SideBar>
      <div style={containerStyles}>
      <Card elevation={30} sx={{ width: '1100px', maxWidth: 1200, backgroundColor:'#F2F2F2', boxShadow:'200'  }}>
      <CardContent>
        <CalorieCounter calories={1800} percentage={75} />
        <AddMealButton onClick={() => {}} />
        <MealSection title="Café da Manhã" />
        <MealSection title="Almoço" />
        <MealSection title="Jantar" />
        <MacroProgressBar />
        </CardContent>
      </Card>
      </div>
      
    </ThemeProvider>
  );
};

export default Home;
