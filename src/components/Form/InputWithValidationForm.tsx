import { useState } from 'react';
import { TextField } from '@mui/material';

interface InputValidationProps {
	label: string;
}

const InputWithValidationForm: React.FC<InputValidationProps> = ({ label }: InputValidationProps) => {
	const [value, setValue] = useState('');
	const [error, setError] = useState('');

	const handleValueChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const inputValue = event.target.value;
		setValue(inputValue);

		if (inputValue.trim() === '') {
			setError('O campo é obrigatório.');
		} else {
			setError('');
		}
	};

	return (
		<TextField
			required
			label={label}
			value={value}
			onChange={handleValueChange}
			error={Boolean(error)}
			helperText={error}
			fullWidth
			variant='filled'
		/>
	);
};

export default InputWithValidationForm;