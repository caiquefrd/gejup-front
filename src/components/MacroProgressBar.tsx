import React, { useState, useEffect } from 'react';
import { Box, Typography, LinearProgress, Paper} from '@mui/material';
import axios from 'axios';

interface MacroProgressBarProps {
  label: string;
  value: number;
  targetValue: number;
  color: string;
}

const MacroProgressBar: React.FC<MacroProgressBarProps> = ({ label, value, targetValue, color }) => {
  const progress = (value / targetValue) * 100;

  return (
    <Paper sx={{ padding: 2, marginBottom: 2, boxShadow: 3 }}>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <Typography variant="body1" sx={{ marginBottom: 1 }}>{label}</Typography>
        <Box sx={{ position: 'relative' }}>
          <LinearProgress
            variant="determinate"
            value={progress}
            sx={{ height: 10, borderRadius: 5, backgroundColor: '#f2f2f2', '& .MuiLinearProgress-bar': { backgroundColor: color } }}
          />
          <Box sx={{
            position: 'absolute',
            top: 0,
            right: 0,
            bottom: 0,
            display: 'flex',
            alignItems: 'center',
            padding: 1
          }}>
            <Typography variant="body2">{value}g / {targetValue}g</Typography>
          </Box>
        </Box>
      </Box>
    </Paper>
  );
};

const MacroTracker: React.FC = () => {
  const [macros, setMacros] = useState({
    protein: { value: 0, target: 0 },
    fat: { value: 0, target: 0 },
    carbs: { value: 0, target: 0 },
  });

  useEffect(() => {
    // possível Função para buscar dados nutricionais do banco de dados ainda não criados
    const fetchNutritionalData = async () => {
      try {
        const response = await axios.get('/api/nutrition'); 
        const data = response.data;
        setMacros({
          protein: { value: data.protein, target: data.proteinTarget },
          fat: { value: data.fat, target: data.fatTarget },
          carbs: { value: data.carbs, target: data.carbsTarget },
        });
      } catch (error) {
        console.error('Erro ao buscar dados nutricionais:', error);
      }
    };

    fetchNutritionalData();
  }, []);


  return (
    <Box sx={{ padding: 2 }}>
      <Typography variant="h6" color='secondary' fontWeight={600}>Meta de Macronutrientes</Typography>
      <MacroProgressBar
        label="Proteínas"
        value={macros.protein.value}
        targetValue={macros.protein.target}
        color="#4caf50"
      />
      <MacroProgressBar
        label="Gorduras"
        value={macros.fat.value}
        targetValue={macros.fat.target}
        color="#ff9800"
      />
      <MacroProgressBar
        label="Carboidratos"
        value={macros.carbs.value}
        targetValue={macros.carbs.target}
        color="#2196f3"
      />
    </Box>
  );
};

export default MacroTracker;
