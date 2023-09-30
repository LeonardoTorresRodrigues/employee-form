import React, { useState } from 'react';
import { Button, Stack, Avatar, Typography } from '@mui/material';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';

interface ProfilePictureButtonProps {
  onUpload: (file: File) => void;
}

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

export default function ProfilePicture() {
	const [profilePicture, setProfilePicture] = useState<File | null>(null);
	const [error, setError] = useState<string | null>(null);

	const handleUpload = (file: File) => {
		if (!file) {
			setError('A imagem de perfil é obrigatória.');
		} else if (file.size > 2048 * 2048) {
			setError('A imagem deve ter no máximo 4MB.');
		} else {
			setError(null);
			setProfilePicture(file);
		}
	};

	return (
		<>
			{error && (
				<Typography
					variant='body2'
					color='error'
				>
					{error}
				</Typography>
			)}
			{profilePicture && (
				<Avatar
					alt='Foto de Perfil'
					src={URL.createObjectURL(profilePicture)}
					className='MuiAvatar-root'
					sx={{
						width: { xs: 70, sm: 120 },
						height: { xs: 70, sm: 120 },
					}}
					variant='rounded'
				/>
			)}
			<ProfilePictureButton onUpload={handleUpload} />
		</>
	);
}