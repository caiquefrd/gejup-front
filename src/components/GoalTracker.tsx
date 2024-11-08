import React, { useState } from "react";
import {
  LinearProgress,
  IconButton,
  Dialog,
  Typography,
  Box,
  TextField,
  Button,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import { motion } from "framer-motion";
import Lottie from "react-lottie";
import waterAnimation from "../assets/lottieIcons/water.json";
import proteinAnimation from "../assets/lottieIcons/protein.json";
import carbsAnimation from "../assets/lottieIcons/carbs.json";
import fatsAnimation from "../assets/lottieIcons/fats.json";
import weightAnimation from "../assets/lottieIcons/weight.json";

interface GoalProps {
  type: string;
  goal: number;
  current: number;
  isWeightGoal?: boolean;
  onWeightChange?: (newWeight: number) => void;
  onGoalChange?: (newGoal: number) => void;
}

const animationMap: { [key: string]: any } = {
  Água: waterAnimation,
  Proteínas: proteinAnimation,
  Carboidratos: carbsAnimation,
  Gorduras: fatsAnimation,
  Peso: weightAnimation,
};

const colorMap: { [key: string]: string } = {
  Água: "#2196F3",
  Proteínas: "#F44336",
  Carboidratos: "#4CAF50",
  Gorduras: "#FF9800",
  Peso: "#9C27B0",
};

const GoalTracker: React.FC<GoalProps> = ({
  type,
  goal,
  current,
  isWeightGoal,
  onWeightChange,
  onGoalChange,
}) => {
  const [open, setOpen] = useState(false);
  const [manualGoal, setManualGoal] = useState<number | null>(null);
  const [tempWeight, setTempWeight] = useState<number | null>(null);

  const progress = (current / (manualGoal ?? goal)) * 100;

  const handleEditClick = () => {
    if (isWeightGoal) {
      setTempWeight(current);
    }
    setOpen(true);
  };

  const handleSave = () => {
    if (isWeightGoal && tempWeight !== null) {
      onWeightChange?.(tempWeight);
    } else if (manualGoal !== null) {
      onGoalChange?.(manualGoal);
    }
    setOpen(false);
  };

  const animationData = {
    loop: true,
    autoplay: true,
    animationData: animationMap[type] || waterAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <Box sx={{ mb: 4, textAlign: "center" }}>
      <Lottie options={animationData} height={100} width={100} />
      <Typography variant="h6">{type}</Typography>

      <LinearProgress
        variant="determinate"
        value={progress}
        sx={{
          height: 10,
          borderRadius: 5,
          backgroundColor: "#e0e0e0",
          "& .MuiLinearProgress-bar": { backgroundColor: colorMap[type] },
        }}
      />
      <Typography>{`${current} / ${manualGoal ?? goal}${
        type === "Peso" ? "kg" : type === "Água" ? "ml" : "g"
      }`}</Typography>

      <IconButton onClick={handleEditClick}>
        <EditIcon />
      </IconButton>

      <Dialog open={open} onClose={() => setOpen(false)}>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <Box sx={{ p: 4 }}>
            <Typography>
              Editar Meta de {type}. Atualmente baseado no seu peso.
              Recomenda-se {goal}
              {type === "Peso" ? "kg" : type === "Água" ? "ml" : "g"}
            </Typography>
            {isWeightGoal ? (
              <TextField
                label="Novo Peso"
                type="number"
                value={tempWeight ?? ""}
                onChange={(e) =>
                  setTempWeight(e.target.value ? Number(e.target.value) : null)
                }
                fullWidth
                sx={{ mt: 2 }}
              />
            ) : (
              <TextField
                label="Nova Meta"
                type="number"
                value={manualGoal ?? ""}
                onChange={(e) =>
                  setManualGoal(e.target.value ? Number(e.target.value) : null)
                }
                fullWidth
                sx={{ mt: 2 }}
              />
            )}
            <Button onClick={handleSave} variant="contained" sx={{ mt: 2 }}>
              Salvar
            </Button>
          </Box>
        </motion.div>
      </Dialog>
    </Box>
  );
};

export default GoalTracker;
