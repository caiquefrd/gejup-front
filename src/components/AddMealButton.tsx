import React, { useState, useEffect, useCallback } from "react";
import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Modal,
  Select,
  Typography,
  TextField,
  Fade,
} from "@mui/material";
import { SelectChangeEvent } from "@mui/material/Select";
import debounce from "lodash.debounce";

interface AddMealButtonProps {
  userId: string;
  addMeal: (meal: { id: string; descricao: string; refeicao: string }) => void;
}

interface ProductPreparation {
  prodprep_id: string;
  produto_named: string;
  preparacao_named: string;
}

const AddMealButton: React.FC<AddMealButtonProps> = ({ userId, addMeal }) => {
  const [open, setOpen] = useState(false);
  const [refeicao, setRefeicao] = useState("");
  const [descricao, setDescricao] = useState("");
  const [peso, setPeso] = useState("");
  const [foodSuggestions, setFoodSuggestions] = useState<ProductPreparation[]>(
    []
  );
  const [filteredSuggestions, setFilteredSuggestions] = useState<
    ProductPreparation[]
  >([]);
  const [selectedFood, setSelectedFood] = useState<{
    prodprep_id: string;
    descricao: string;
  } | null>(null);

  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setPeso("");
    setRefeicao("");
    setDescricao("");
    setFoodSuggestions([]);
    setFilteredSuggestions([]);
    setSelectedFood(null);
    setOpen(false);
  };

  const handleChangeRefeicao = (event: SelectChangeEvent) => {
    setRefeicao(event.target.value as string);
  };

  // Fetch suggestions from the API based on the query
  const fetchSuggestions = useCallback(
    debounce(async (query: string) => {
      if (query) {
        try {
          const response = await fetch(
            `http://localhost:3000/getProdPrep?query=${encodeURIComponent(
              query
            )}`
          );
          if (!response.ok) throw new Error("Network response was not ok");

          const data: ProductPreparation[] = await response.json();
          setFoodSuggestions(data); // Store fetched data
          setFilteredSuggestions(data); // Initialize filtered data
        } catch (error) {
          console.error("Error fetching food suggestions:", error);
        }
      } else {
        setFoodSuggestions([]);
        setFilteredSuggestions([]);
      }
    }, 500),
    []
  );

  // Handle real-time filtering as the user types
  const handleDescricaoChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const value = event.target.value;
    setDescricao(value);

    // Fetch data if input is not empty, otherwise reset suggestions
    if (value) {
      fetchSuggestions(value);

      // Filter suggestions in real-time
      const filtered = foodSuggestions.filter((item) =>
        item.produto_named.toLowerCase().includes(value.toLowerCase())
      );
      setFilteredSuggestions(filtered);
    } else {
      setFilteredSuggestions([]);
    }
  };

  const handlePesoChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPeso(event.target.value);
  };

  // Handle the selection of a food suggestion
  const handleSuggestionClick = (food: {
    prodprep_id: string;
    descricao: string;
  }) => {
    setDescricao(food.descricao);
    setSelectedFood(food);
    setFilteredSuggestions([]);
  };

  // Register meal and send data to the backend
  const handleRegisterMeal = async () => {
    if (selectedFood && refeicao && peso) {
      try {
        const food_weigth = peso;
        const response = await fetch("http://localhost:3000/ref", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            user_id: userId,
            prodprep_id: selectedFood.prodprep_id,
            food_weigth,
          }),
        });

        if (!response.ok) throw new Error("Network response was not ok");

        addMeal({
          id: selectedFood.prodprep_id,
          descricao: selectedFood.descricao,
          refeicao,
        });

        handleClose();
      } catch (error) {
        console.error("Erro ao registrar alimento:", error);
      }
    }
  };

  return (
    <>
      <Button
        variant="contained"
        color="primary"
        onClick={handleOpen}
        sx={{
          mt: 0,
          mb: 2,
          borderRadius: 2,
          color: "#024059",
          width: "100%",
          fontWeight: "bold",
          boxShadow: 4,
        }}
      >
        Registrar Refeição
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
      >
        <Fade in={open}>
          <Box
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: 400,
              bgcolor: "background.paper",
              borderRadius: 1,
              boxShadow: 24,
              p: 4,
            }}
          >
            <Typography variant="h6" align="center">
              Registro de Refeição
            </Typography>

            <FormControl fullWidth required sx={{ mt: 2 }}>
              <InputLabel>Refeição</InputLabel>
              <Select
                value={refeicao}
                label="Refeição"
                onChange={handleChangeRefeicao}
              >
                <MenuItem value="1">Café da Manhã</MenuItem>
                <MenuItem value="2">Almoço</MenuItem>
                <MenuItem value="3">Janta</MenuItem>
              </Select>
            </FormControl>

            <TextField
              label="Nome do Alimento"
              variant="outlined"
              fullWidth
              value={descricao}
              onChange={handleDescricaoChange}
              sx={{ mt: 2 }}
            />

            <TextField
              label="Peso em gramas"
              variant="outlined"
              fullWidth
              value={peso}
              onChange={handlePesoChange}
              sx={{ mt: 2 }}
            />

            {filteredSuggestions.length > 0 && (
              <Box
                sx={{
                  maxHeight: 200,
                  overflowY: "auto",
                  border: 1,
                  borderColor: "grey.400",
                  borderRadius: 1,
                  mt: 1,
                }}
              >
                {filteredSuggestions.map((suggestion) => (
                  <Typography
                    key={suggestion.prodprep_id}
                    sx={{ padding: "5px", cursor: "pointer" }}
                    onClick={() =>
                      handleSuggestionClick({
                        prodprep_id: suggestion.prodprep_id,
                        descricao: suggestion.produto_named,
                      })
                    }
                  >
                    {suggestion.produto_named}
                  </Typography>
                ))}
              </Box>
            )}

            <Button
              variant="contained"
              color="primary"
              onClick={handleRegisterMeal}
              sx={{
                mt: 2,
                borderRadius: 2,
                color: "#024059",
                width: "100%",
                fontWeight: "bold",
                boxShadow: 4,
              }}
            >
              Concluir Registro
            </Button>
          </Box>
        </Fade>
      </Modal>
    </>
  );
};

export default AddMealButton;