import { useState } from 'react';
import { TextField } from '@mui/material';

interface AddressFieldFormProps {
	validateAddress: (address: string) => boolean;
}

const AddressFieldForm: React.FC<AddressFieldFormProps> = ({
	validateAddress,
}: AddressFieldFormProps) => {
	const [address, setAddress] = useState<string>('');
	const [error, setError] = useState<string>('');

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const newAddress = event.target.value;
		setAddress(newAddress);
	};

	const handleBlur = () => {
		const isValid = validateAddress(address);
		if (!isValid) {
			setError('Endereço inválido.');
		} else {
			setError('');
		}
	};

	return (
		<TextField
			required
			label='Endereço'
			helperText='ex. Avenida Paulista, 1.234 - São Paulo - SP - 07010 001'
			value={address}
			onChange={handleChange}
			onBlur={handleBlur}
			error={Boolean(error)}
			fullWidth
			variant='filled'
		/>
	);
};
export default AddressFieldForm;