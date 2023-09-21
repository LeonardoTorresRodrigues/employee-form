'use client'

import React from 'react';
import { TextField, Typography, Box, MenuItem, } from '@mui/material';
import { MuiTelInput } from 'mui-tel-input';
//import { DatePicker } from '@mui/x-date-pickers';
import { DateField } from '@mui/x-date-pickers/DateField';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

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
        <Typography
          gutterBottom
          variant='h6'
          align='justify'
        >
          Digite abaixo as informações do funcionário
        </Typography>
        <form noValidate autoComplete='off'>
          <TextField
            label="Nome"
            helperText="ex. Tiago"
            defaultValue=""
            fullWidth
            required
            variant='filled'
          />
          <TextField
            fullWidth
            required
            defaultValue=""
            label="Sobrenome"
            helperText="ex. Souza"
            variant='filled'
          />
          <TextField
            label="Sexo"
            required
            select
            defaultValue=""
            helperText="Selecione o sexo do funcionário"
            variant='filled'
            size='small'
          >
            {sexo.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DateField
              label="Data de nascimento"
              helperText="01-01-2000"
              format='DD-MM-YYYY'
              size='small'
              variant='filled'
              required
            />
          </LocalizationProvider>
          <TextField
            required
            fullWidth
            label="Endereço"
            defaultValue=""
            helperText="ex. Avenida Paulista, 1.234 - São Paulo - SP - 07010 001"
            variant='filled'
          />
          <MuiTelInput
            defaultCountry='BR'
            value={phone}
            onChange={handleChange}
            required
            label="Telefone"
            helperText="(xx) xxxxxxxxx"
            size='small'
            variant='filled'
          />

        </form>
      </Box>
    </section>
  );
};