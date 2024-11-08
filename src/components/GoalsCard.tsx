import React, { useState, useEffect } from "react";
import { Container, Typography, Grid, Paper } from "@mui/material";
import GoalTracker from "../components/GoalTracker";
import WeightInputPopup from "../components/WeightInputPopup";

const calculateGoal = (weight: number, type: string): number => {
  switch (type) {
    case "Água":
      return weight * 35;
    case "Proteínas":
      return weight * 1.6;
    case "Carboidratos":
      return weight * 5;
    case "Gorduras":
      return weight * 1.2;
    default:
      return 0;
  }
};

const GoalsCard: React.FC = () => {
  const [weight, setWeight] = useState<number | null>(null);
  const [isPopupVisible, setPopupVisible] = useState(false);

  const [manualGoals, setManualGoals] = useState<{ [key: string]: number }>({
    Água: 0,
    Proteínas: 0,
    Carboidratos: 0,
    Gorduras: 0,
  });

  // Efeito para carregar o peso e as metas manuais do localStorage quando o componente é montado
  useEffect(() => {
    const savedWeight = localStorage.getItem("userWeight");
    if (!savedWeight) {
      setPopupVisible(true); // Exibe o popup se o peso ainda não foi definido
    } else {
      setWeight(Number(savedWeight)); // Define o peso a partir do localStorage
    }

    const savedGoals = localStorage.getItem("manualGoals");
    if (savedGoals) {
      setManualGoals(JSON.parse(savedGoals)); // Carrega metas manuais do localStorage
    }
  }, []);

  // Efeito para salvar o peso no localStorage sempre que ele for atualizado
  useEffect(() => {
    if (weight !== null) {
      localStorage.setItem("userWeight", weight.toString());
    }
  }, [weight]);

  // Função para salvar o peso quando o usuário o define no popup
  const handleWeightSubmit = (submittedWeight: number) => {
    setWeight(submittedWeight);
    setPopupVisible(false);
  };

  const handleGoalChange = (type: string, newGoal: number) => {
    setManualGoals((prevGoals) => {
      const updatedGoals = { ...prevGoals, [type]: newGoal };
      localStorage.setItem("manualGoals", JSON.stringify(updatedGoals));
      return updatedGoals;
    });
  };

  const currentIntake = {
    Água: 1200,
    Proteínas: 80,
    Carboidratos: 250,
    Gorduras: 70,
    Peso: weight || 0,
  };

  return (
    <Container>
      <Paper elevation={22} sx={{ width: "100%", maxWidth: 1200, backgroundColor: "#F2F2F2", boxShadow: "200", margin: "auto",
          padding: 4, }}>
        <Typography variant="h5" gutterBottom align="center" fontWeight={600}>
          Minhas Metas Diárias
        </Typography>
        <Grid item xs={12} md={6}>
          <GoalTracker
            type="Peso"
            goal={weight || 0}
            current={currentIntake["Peso"]}
            isWeightGoal
            onWeightChange={setWeight}
          />
        </Grid>
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <GoalTracker
              type="Água"
              goal={manualGoals["Água"] || calculateGoal(weight || 0, "Água")}
              current={currentIntake["Água"]}
              onGoalChange={(newGoal) => handleGoalChange("Água", newGoal)}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <GoalTracker
              type="Proteínas"
              goal={manualGoals["Proteínas"] || calculateGoal(weight || 0, "Proteínas")}
              current={currentIntake["Proteínas"]}
              onGoalChange={(newGoal) => handleGoalChange("Proteínas", newGoal)}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <GoalTracker
              type="Carboidratos"
              goal={manualGoals["Carboidratos"] || calculateGoal(weight || 0, "Carboidratos")}
              current={currentIntake["Carboidratos"]}
              onGoalChange={(newGoal) => handleGoalChange("Carboidratos", newGoal)}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <GoalTracker
              type="Gorduras"
              goal={manualGoals["Gorduras"] || calculateGoal(weight || 0, "Gorduras")}
              current={currentIntake["Gorduras"]}
              onGoalChange={(newGoal) => handleGoalChange("Gorduras", newGoal)}
            />
          </Grid>
        </Grid>
        {isPopupVisible && <WeightInputPopup onClose={handleWeightSubmit} />}
      </Paper>
    </Container>
  );
};

export default GoalsCard;
