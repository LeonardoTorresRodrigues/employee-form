import React from 'react';
import { TextField, Typography, Box, MenuItem, } from '@mui/material';

const sexo = [
  {
    value: 'masculino',
    label: 'Masculino'
  },
  {
    value: 'feminino',
    label: 'Feminino'
  },
  {
    value: 'outro',
    label: 'Outro'
  }
]

export default function Form() {

  return (
    <section>
      <Box
        sx={{
          flexDirection: 'column',
          width: 1 / 2,
          border: 1,
          boxShadow: 1,
          mx: 'auto'
        }}
      >
        <Typography gutterBottom variant='h6' align='justify'>
          Digite abaixo as informações do funcionário
        </Typography>
        <form noValidate autoComplete='off'>
          <TextField
            fullWidth
            required
            defaultValue=""
            label="Nome"
            helperText="ex. Tiago"
          />
          <TextField
            fullWidth
            required
            defaultValue=""
            label="Sobrenome"
            helperText="ex. Souza"
          />
          <TextField
            label="Sexo"
            required
            select
            defaultValue=""
            helperText="Selecione o sexo do funcionário"
          >
            {sexo.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            required
            fullWidth
            label="Endereço"
            defaultValue=""
            helperText="ex. Avenida Paulista, 1.234 - São Paulo - SP - 07010 001"
          />
          <TextField
            required
            type='number'
            label="Telefone"
            defaultValue=""
            helperText="(xx) xxxxxxxxx"
          />
        </form>
      </Box>
    </section>
  );
};