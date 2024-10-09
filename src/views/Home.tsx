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
import SideBar from '../components/SideBar';


const Home: React.FC = () => {
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
