import { TextField, MenuItem } from '@mui/material';

interface GenderFieldProps {
	value: string;
	onChange: (value: string) => void;
}

const genderOptions = [
	{
		value: 'homem',
		label: 'Homem'
	},
	{
		value: 'mulher',
		label: 'Mulher'
	},
	{
		value: 'none',
		label: 'Prefiro não dizer'
	},
	{
		value: 'outro',
		label: 'Outro'
	}
];

const GenderForm: React.FC<GenderFieldProps> = ({ value, onChange }: GenderFieldProps) => {
	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		onChange(event.target.value);
	};

	return (
		<>
			<TextField
				required
				select
				label='Gênero'
				helperText='Selecione o gênero do funcionário ou insira outro valor'
				value={value}
				onChange={handleChange}
				size='medium'
				variant='filled'
			>
				{genderOptions.map((option) => (
					<MenuItem key={option.value} value={option.value}>
						{option.label}
					</MenuItem>
				))}
			</TextField>
		</>
	);
};

export default GenderForm;