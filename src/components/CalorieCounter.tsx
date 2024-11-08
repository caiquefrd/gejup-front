import React, { useState, useEffect } from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { Box, Typography } from '@mui/material';
import api from '../services/api';

const CalorieCounter: React.FC = () => {
  const [calories, setCalories] = useState(0);
  const [caloriesGoal, setCaloriesGoal] = useState(0);

  useEffect(() => {
    const fetchCalorieGoal = async () => {
      try {
        const user_id = localStorage.getItem('userId');

        if (!user_id) {
          console.error("User ID não encontrado no localStorage");
          return;
        }

        const response = await api.get(`/goals?user_id=${user_id}`);
        const { caloriesGoal } = response.data;
        
        setCaloriesGoal(caloriesGoal);
        setCalories(response.data.currentCalories || 0); // Atualize com o valor atual de calorias
      } catch (error) {
        console.error("Erro ao buscar meta de calorias:", error);
      }
    };

    fetchCalorieGoal();
  }, []);

  const percentage = Math.min((calories / caloriesGoal) * 100, 100); // Limita o progresso a 100%

  return (
    <Box display="flex" flexDirection="column" alignItems="center">
      <Box width={150} height={150}>
        <CircularProgressbar
          value={Math.random() * 100}
          strokeWidth={10}
          styles={buildStyles({
            pathColor: '#04BF8A',
            trailColor: '#E0E0E0',
            strokeLinecap: 'round',
          })}
        />
      </Box>
      <div style={{ padding: '20px', display: 'flex', justifyContent: 'center' }}>
        <Typography variant="h4" component="div" color="secondary" fontWeight={700} mt={-13} fontSize={16}>
          {caloriesGoal} calorias
        </Typography>
      </div>
    </Box>
  );
};

export default CalorieCounter;
