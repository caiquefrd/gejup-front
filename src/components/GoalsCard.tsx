import React, { useState, useEffect } from "react";
import { Container, Typography, Grid, Paper } from "@mui/material";
import GoalTracker from "../components/GoalTracker";
import WeightInputPopup from "../components/WeightInputPopup";
import api from "../services/api";

const GoalsCard: React.FC = () => {
  const [macros, setMacros] = useState({
    protein: { value: 0, target: 0 },
    fat: { value: 0, target: 0 },
    carbs: { value: 0, target: 0 },
    weigth: { value: 0, target: 0 },
    water: { value: 0, target: 0 },
  });
  const [showWeightPopup, setShowWeightPopup] = useState(false);


  useEffect(() => {
    const fetchMacros = async () => {
      try {
        const user_id = localStorage.getItem("userId");
        if (!user_id) return console.error("User ID não encontrado");

        const response = await api.get(`/ref?user_id=${user_id}`);
        const data = response.data.user_data;

        const goalsResponse = await api.get(`/goals?user_id=${user_id}`);
        const currentGoals = goalsResponse.data;
        console.log(currentGoals);

        setMacros({
          protein: { value: data.protein, target: currentGoals.proteinGoal },
          fat: { value: data.fat, target: currentGoals.fatGoal },
          carbs: { value: data.carb, target: currentGoals.carbGoal },
          weigth: { value: currentGoals.weigth, target: currentGoals.weigthGoal },
          water: { value: 1200 , target: currentGoals.waterGoal },
        });
      } catch (error) {
        console.error("Erro ao buscar dados do backend", error);
      }
    };

    fetchMacros();
  }, []);

  const handleWeightPopupClose = (userData: any) => {
    setShowWeightPopup(false);
    // Atualize os dados de macros se userData tiver alterações
    if (userData?.weight) {
      setMacros((prevMacros) => ({
        ...prevMacros,
        weight: { ...prevMacros.weigth, value: userData.weight },
      }));
    }
  };

  return (
    <Container>
      <Paper
        elevation={22}
        sx={{
          width: "1100px",
          maxWidth: 1200,
          height: "800px",
          backgroundColor: "#F2F2F2",
          boxShadow: "200",
        }}
      >
        <Typography variant="h6" gutterBottom align="center" fontWeight={600} mt={5}>
          Minhas Metas Diárias
        </Typography>
        
        <Grid item xs={12} md={6}>
          <GoalTracker
            type="Peso"
            goal={macros.weigth.target || 0}
            current={macros.weigth.value}
            isWeightGoal
          />
        </Grid>

        <Grid container spacing={1}>
          <Grid item xs={12} md={6}>
            <GoalTracker
              type="Água"
              goal={macros.water.target || 0}
              current={macros.water.value}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <GoalTracker
              type="Proteínas"
              goal={macros.protein.target || 0}
              current={macros.protein.value}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <GoalTracker
              type="Carboidratos"
              goal={macros.carbs.target || 0}
              current={macros.carbs.value}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <GoalTracker
              type="Gorduras"
              goal={macros.fat.target || 0}
              current={macros.fat.value}
            />
          </Grid>
        </Grid>

        <WeightInputPopup onClose={handleWeightPopupClose} open={showWeightPopup} />
      </Paper>
    </Container>
  );
};

export default GoalsCard;
