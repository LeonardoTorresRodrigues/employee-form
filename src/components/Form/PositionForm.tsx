import { useState } from 'react';
import { TextField } from '@mui/material';

export default function PositionForm() {
	const [position, setPosition] = useState('');
	const [error, setError] = useState('');

	const handlePositionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const inputValue = event.target.value;
		setPosition(inputValue);

		if (inputValue.trim() === '') {
			setError('O campo Cargo é obrigatório.');
		} else {
			setError('');
		}
	};

	return (
		<TextField
			required
			label='Cargo'
			value={position}
			onChange={handlePositionChange}
			error={Boolean(error)}
			helperText={error}
			fullWidth
			variant='filled'
		/>
	);
}