import React from 'react';
import { Button, Stack } from "@mui/material";
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';

interface ProfilePictureButtonProps {
  onUpload: (file: File) => void;
};

const ProfilePictureButton: React.FC<ProfilePictureButtonProps> = ({ onUpload }) => {
  const handleButtonClick = () => {
    const fileInput = document.createElement('input');
    fileInput.type = 'file';
    fileInput.accept = 'image/*';
    fileInput.style.display = 'none';

    fileInput.addEventListener('change', (event) => {
      const selectedFile = (event.target as HTMLInputElement).files?.[0];
      if (selectedFile) {
        onUpload(selectedFile);
      }
    });

    fileInput.click();
  };

  return (
    <Stack>
      <Button
        variant='outlined'
        size='small'
        color='primary'
        startIcon={<AddPhotoAlternateIcon />}
        onClick={handleButtonClick}
        aria-label='adicionar foto de perfil'
      >
        Adicionar Foto de Perfil
      </Button>
    </Stack>
  );
};

export default ProfilePictureButton;