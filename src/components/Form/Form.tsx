'use client'

import React, { useState } from 'react';
import { TextField, Typography, Box, MenuItem, Avatar, Stack, Button, } from '@mui/material';
import { MuiTelInput } from 'mui-tel-input';
//import { DatePicker } from '@mui/x-date-pickers';
import { DateField } from '@mui/x-date-pickers/DateField';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import Input from '@mui/material/Input';


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

// const ProfilePic = () => {
//   const [pic, setPic] = useState("")
//   return (
//     <Stack>
//       <TextField
//         type='file'

//       />
//     </Stack>
//   )
// }

export interface SimpleDialogProps {
  open: boolean;
  selectedValue: string;
  onClose: (value: string) => void;
};

function SimpleDialog(props: SimpleDialogProps) {
  const { onClose, selectedValue, open } = props;

  const handleClose = () => {
    onClose(selectedValue);
  };

  const handleListItemClick = (value: string) => {
    onClose(value);
  };

  return (
    <Dialog onClose={handleClose} open={open}>
      <DialogTitle>Selecione uma foto</DialogTitle>
      <Input
        type='string'
        placeholder=" Cole aqui o link"
      />
      <Input
        type='file'
      />
    </Dialog>
  );
}

export default function Form() {
  const [phone, setPhone] = React.useState('');

  const handleChange = (newPhone: string) => {
    setPhone(newPhone)
  }

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (value: string) => {
    setOpen(false);
  }

  // const [pic, setPic] = React.useState('');
  // const handleProfilePic = (newProfilePic: string) => {
  //   setPic(newProfilePic)
  // }

  return (
    <Box
      sx={{
        flexDirection: 'column',
        width: 1 / 2,
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
      <Stack mx={10}>
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
          <Stack direction="row" spacing={"auto"} flexWrap={'wrap'}>
            <TextField
              label="Sexo"
              required
              select
              defaultValue=""
              helperText="Selecione o sexo do funcionário"
              variant='filled'
              size='medium'
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
                size='medium'
                variant='filled'
                required
              />
            </LocalizationProvider>
          </Stack>
          <TextField
            required
            fullWidth
            label="Endereço"
            defaultValue=""
            helperText="ex. Avenida Paulista, 1.234 - São Paulo - SP - 07010 001"
            variant='filled'
          />
          <Stack direction="row" spacing={"auto"}>
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
            <Stack>
              <Button variant='outlined' onClick={handleClickOpen}>
                Adicione uma foto
              </Button>
              <SimpleDialog
                selectedValue=''
                open={open}
                onClose={handleClose}
              />
              {/* <Button variant='outlined'>
                Adicionar
              </Button> */}
            </Stack>
            <Avatar
              alt='profile avatar'
              src=""
              variant='rounded'
            />
          </Stack>
        </form>
      </Stack>
    </Box>
  );
};