import React from 'react';
import { TextField } from '@mui/material';
import { NumericFormat, NumberFormatValues } from 'react-number-format';

interface SalaryInputProps {
	value: number;
	onChange: (value: number) => void;
}

const SalaryInput: React.FC<SalaryInputProps> = ({ value, onChange }) => {
	const handleSalaryChange = (values: NumberFormatValues) => {
		const { floatValue } = values;

		if (floatValue !== undefined) {
			onChange(floatValue);
		} else {
			onChange(0);
		}
	};

	return (
		<NumericFormat
			value={value}
			customInput={TextField}
			label='Salário'
			helperText='Utilize "." (ponto) ou "," (vírgula) para separar os decimais'
			variant='filled'
			thousandSeparator='.'
			decimalSeparator=','
			prefix='R$'
			onValueChange={handleSalaryChange}
			allowNegative={false}
		/>
	);
};

export default SalaryInput;