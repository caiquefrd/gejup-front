import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';  
import theme from '../styles/theme';  
import CalorieCounter from '../components/CalorieCounter';
import AddMealButton from '../components/AddMealButton';
import MealSection from '../components/MealSection';
import MacroProgressBar from '../components/MacroProgressBar';
import { containerStyles } from '../styles/AppStyles';
import { Card, CardContent } from '@mui/material';


const Home: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div style={containerStyles}>
      <Card elevation={22} sx={{ width: '110%', maxWidth: 600, backgroundColor:'#F2F2F2'  }}>
      <CardContent>
        <CalorieCounter calories={2000} percentage={75} />
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
