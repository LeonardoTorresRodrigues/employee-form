import { useState } from 'react';
import { TextField } from '@mui/material';

export default function NameForm() {
	const [name, setName] = useState('');
	const [lastName, setLastName] = useState('');

	const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const inputValue = event.target.value;

		if (/^[a-zA-Z]*$/.test(inputValue) && inputValue.length <= 50) {
			setName(inputValue);
		}
	};

	const handleLastNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const inputValue = event.target.value;

		if (/^[a-zA-Z]*$/.test(inputValue) && inputValue.length <= 50) {
			setLastName(inputValue);
		}
	};

	return (
		<>
			<TextField
				required
				label='Nome'
				helperText='ex. Leonardo'
				value={name}
				onChange={handleNameChange}
				fullWidth
				variant='filled'
			/>
			<TextField
				required
				label='Sobrenome'
				helperText='ex. Rodrigues'
				value={lastName}
				onChange={handleLastNameChange}
				fullWidth
				variant='filled'
			/>
		</>
	);
}
