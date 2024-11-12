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
import { useNavigate } from 'react-router-dom';
 
interface Meal {
  id: string;
  descricao: string;
  refeicao: string;
}

const Home: React.FC = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [meals, setMeals] = useState<Meal[]>([]); // Estado para armazenar as refeições
  const navigate = useNavigate();
 
  useEffect(() => {
    const token = localStorage.getItem('authToken');
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
            throw new Error('Failed to fetch the protected resource');
          }
          return response.json();
        })
        .then(data => {
          setData(data);
          localStorage.setItem("userId", data.userId);
          // fetchMeals(); // Busca as refeições quando o usuário é autenticado
        })
        .catch(error => {
          setError(error.message);
        });
    }
  }, [navigate]);
 
  // Função que será chamada quando uma nova refeição for adicionada
  const handleMealAdded = (meal: Meal) => {
    setMeals((prevMeals) => [...prevMeals, meal]); // Adiciona a nova refeição à lista de refeições
  };
 
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <SideBar />
      <div style={containerStyles}>
      <Card elevation={30} sx={{ width: '1100px', maxWidth: 1200, backgroundColor:'#F2F2F2', boxShadow:'200'  }}>
      <CardContent>
        <CalorieCounter />
        <AddMealButton
              userId={localStorage.getItem("userId") || ''}
              addMeal={handleMealAdded}
            />
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