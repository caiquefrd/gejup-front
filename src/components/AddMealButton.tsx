import React, { useState } from 'react';
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
} from '@mui/material';
import { SelectChangeEvent } from '@mui/material/Select';

const AddMealButton: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [refeicao, setRefeicao] = useState('');
  const [descricao, setDescricao] = useState('');
  const [foodSuggestions, setFoodSuggestions] = useState<{ _id: string; descricao: string }[]>([]);
  const [searchQuery, setSearchQuery] = useState('');

  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setRefeicao('');
    setDescricao('');
    setSearchQuery('');
    setFoodSuggestions([]);
    setOpen(false);
  };

  const handleChangeRefeicao = (event: SelectChangeEvent) => {
    setRefeicao(event.target.value as string);
  };

  const handleDescricaoChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setDescricao(value);
    setSearchQuery(value); // Atualiza o estado do campo de pesquisa

    // Chama a API de sugestões de alimentos quando o campo for alterado
    if (value.length > 0) {
      try {
        const user_id = localStorage.getItem('user_id');
        const response = await fetch("http://localhost:3000/getProdPrep", {
          method:"GET",
          headers:{
            "Content-Type": "application/json",
          },
          body: JSON.stringify({user_id})
        })
          
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setFoodSuggestions(data); // Atualiza as sugestões de alimentos
      } catch (error) {
        console.error("Error fetching food suggestions:", error);
      }
    } else {
      setFoodSuggestions([]); // Limpa as sugestões se o campo estiver vazio
    }
  };

  const handleSuggestionClick = (food: { _id: string; descricao: string }) => {
    setDescricao(food.descricao); // Atualiza a descrição com o alimento sugerido
    setFoodSuggestions([]); // Limpa as sugestões após selecionar um alimento
  };

  return (
    <>
      <Button
        variant="contained"
        color="primary"
        onClick={handleOpen}
        sx={{ marginTop: 0, marginBottom: 2, borderRadius: '16px', color: '#024059', width: '100%', fontWeight: '600', boxShadow: 4 }}
      >
        Registrar Refeição
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
      >
        <Fade in={open}>
          <Box
            sx={{
              position: 'absolute',
              top: '50%', left: '50%',
              transform: 'translate(-50%, -50%)',
              width: 400,
              bgcolor: 'background.paper',
              borderRadius: '5px',
              boxShadow: 24,
              p: 4,
            }}
          >
            <Typography id="parent-modal-title" variant="h6" component="h2" marginLeft={'58px'}>
              Registro de Refeição
            </Typography>

            <Typography id="parent-modal-description" sx={{ mt: 2, marginBottom: '10px' }}>
              Selecione a refeição:
            </Typography>
            <FormControl fullWidth required>
              <InputLabel id="demo-simple-select-label">Refeição</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={refeicao}
                label="Refeição"
                onChange={handleChangeRefeicao}
                sx={{ borderColor: '#04BF8A' }}
              >
                <MenuItem value={1}>Café da Manhã</MenuItem>
                <MenuItem value={2}>Almoço</MenuItem>
                <MenuItem value={3}>Janta</MenuItem>
              </Select>
            </FormControl>

            <Typography id="parent-modal-description" sx={{ mt: 2, marginBottom: '10px' }}>
              Busque um alimento:
            </Typography>
            <TextField
              label="Nome do Alimento"
              variant="outlined"
              fullWidth
              value={descricao}
              onChange={handleDescricaoChange}
              sx={{ marginBottom: '5px' }}
            />

            {/* Lista de sugestões de alimentos */}
            {foodSuggestions.length > 0 && (
              <Box sx={{ maxHeight: 200, overflowY: 'auto', border: '1px solid #ccc', borderRadius: '5px', marginBottom: '10px' }}>
                {foodSuggestions.map((food) => (
                  <Typography
                    key={food._id}
                    sx={{ padding: '5px', cursor: 'pointer' }}
                    onClick={() => handleSuggestionClick(food)}
                  >
                    {food.descricao} {/* Aqui, exibimos a descrição correta */}
                  </Typography>
                ))}
              </Box>
            )}

            <Button
              variant="contained"
              color="primary"
              onClick={handleClose}
              sx={{
                marginTop: 2,
                marginBottom: 2,
                borderRadius: '16px',
                color: '#024059',
                width: '100%',
                fontWeight: '600',
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
