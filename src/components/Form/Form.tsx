'use client'

import React from 'react';
import { TextField, Typography, Box, MenuItem, } from '@mui/material';
import { MuiTelInput } from 'mui-tel-input';

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
  const [phone, setPhone] = React.useState('');

  const handleChange = (newPhone: string) => {
    setPhone(newPhone)
  }
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
            label="Nome"
            helperText="ex. Tiago"
            defaultValue=""
            fullWidth
            required
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
          <MuiTelInput
            defaultCountry='BR'
            value={phone}
            onChange={handleChange}
            required
            label="Telefone"
            helperText="(xx) xxxxxxxxx"
            size='small'
            variant='outlined'
          />
        </form>
      </Box>
    </section>
  );
};