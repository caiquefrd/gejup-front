import React, { useState } from 'react';
import { Box, Button, FormControl, InputLabel, MenuItem, Modal, Select, Typography, TextField, Fade } from '@mui/material';
import { SelectChangeEvent } from '@mui/material/Select';

const RegisterMealButton: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [refeicao, setRefeicao] = useState('');
  const [descricao, setDescricao] = useState('');

  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setRefeicao('');
    setDescricao('');
    setOpen(false);
  };

  const handleReset = () => {
    setRefeicao('');
    setDescricao('');
  };

  const handleChangeRefeicao = (event: SelectChangeEvent) => {
    setRefeicao(event.target.value as string);
  };

  const handleDescricaoChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDescricao(event.target.value);
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
              p: 4
            }}
          >
            <Typography id="parent-modal-title" variant="h6" component="h2" marginLeft={'58px'}>
              Registro de Refeição
            </Typography>

            <Typography id="parent-modal-description" sx={{
              mt: 2,
              marginBottom: '10px'
              }}>
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
                sx={{
                  borderColor: '#04BF8A'
                }}
              >
                <MenuItem value={1}>Café da Manhã</MenuItem>
                <MenuItem value={2}>Almoço</MenuItem>
                <MenuItem value={3}>Janta</MenuItem>
              </Select>
            </FormControl>
            <Typography id="parent-modal-description" sx={{
              mt: 2,
              marginBottom: '10px'
              }}
            >
              Escreva a sua refeição:
            </Typography>
            <TextField
              label="Descrição da Refeição"
              variant="outlined"
              fullWidth
              required
              value={descricao}
              onChange={handleDescricaoChange}
              sx={{
                marginBottom: '5px'
              }}
            />

            <Button
              variant="contained"
              color="primary"
              onClick={handleReset}
              sx={{
                marginTop: 2,
                borderRadius: '16px',
                color: '#024059',
                width: '100%',
                fontWeight: '600',
                boxShadow: 4
              }}
            >
              Registrar Refeição
            </Button>

            <Button
              variant="contained"
              color="primary"
              onClick={handleClose}
              sx={{ marginTop: 2,
                marginBottom: 2,
                borderRadius: '16px',
                color: '#024059',
                width: '100%',
                fontWeight: '600',
                boxShadow: 4
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

export default RegisterMealButton;