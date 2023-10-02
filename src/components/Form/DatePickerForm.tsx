import { LocalizationProvider, DateField } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';


interface DatePickerProps {
	label: string;
	helperText: string;
	value: Date | null;
	onChange: (date: Date | null) => void;
}

const DatePickerForm: React.FC<DatePickerProps> = ({
	label,
	helperText,
	value,
	onChange,
}: DatePickerProps) => {
	return (
		<LocalizationProvider dateAdapter={AdapterDayjs}>
			<DateField
				required
				label={label}
				helperText={helperText}
				value={value}
				onChange={onChange}
				format='DD-MM-YYYY'
				size='medium'
				variant='filled'
			/>
		</LocalizationProvider>
	);
};

export default DatePickerForm;
