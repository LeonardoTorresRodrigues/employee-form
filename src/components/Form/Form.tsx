'use client';

import { useState } from 'react';
import { TextField, Stack, Grid, Paper, Button, Typography } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import { useTheme } from '@mui/material/styles';
import ProfilePicture from './ProfilePicture';
import SalaryInput from './SalaryInput';
import PhoneNumber from './PhoneNumber';
import NameForm from './NameForm';
import GenderForm from './GenderForm';
import DatePickForm from './DatePickerForm';
import PositionForm from './PositionForm';

export default function Form() {
	const theme = useTheme();

	const [gender, setGender] = useState<string>('');
	const [otherGenderValue, setOtherGenderValue] = useState<string>('');

	const handleOtherGenderChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const inputValue = event.target.value;

		if (/^[a-zA-ZÀ-ÿ\s]*$/.test(inputValue) && inputValue.length <= 25) {
			setOtherGenderValue(inputValue);
		}
	};

	const [birthday, setBirthday] = useState<Date | null>(null);
	const [admissionDate, setAdmissionDate] = useState<Date | null>(null);

	const handleBirthdayChange = (date: Date | null) => {
		setBirthday(date);
	};

	const handleAdmissionDateChange = (date: Date | null) => {
		setAdmissionDate(date);
	};
	const [salary, setSalary] = useState<number>(0);

	const handleSalaryChange = (newSalary: number) => {
		setSalary(newSalary);
	};

	return (
		<Grid container justifyContent={'center'}>
			<Grid item xs={12} sm={8} md={6}>
				<Paper elevation={3} style={{ padding: '20px' }}>
					<form noValidate autoComplete='off'>
						<Typography
							variant="h6"
							component="div"
							sx={{
								flexGrow: 1,
								marginBottom: 2,
								[theme.breakpoints.down('sm')]: {
									fontSize: '1rem',
									flexWrap: 'wrap',
								},
							}}
						>
							Informações de Contato
						</Typography>
						<NameForm />
						<Stack
							direction={{ xs: 'column', lg: 'row' }}
							spacing={'auto'}
						>
							<GenderForm
								value={gender}
								onChange={setGender}
							/>
							{gender === 'outro' && (
								<TextField
									required
									label='Escreva aqui o gênero'
									value={otherGenderValue}
									onChange={handleOtherGenderChange}
									size='medium'
									variant='filled'
								/>
							)}
							<DatePickForm
								label='Data de Nascimento'
								helperText='DD-MM-AAAA'
								value={birthday}
								onChange={handleBirthdayChange}
							/>
						</Stack>
						<TextField
							required
							fullWidth
							label="Endereço"
							defaultValue=""
							helperText="ex. Avenida Paulista, 1.234 - São Paulo - SP - 07010 001"
							variant='filled'
						/>
						<Stack
							direction={{ xs: 'column', sm: 'row' }}
							alignItems={{ xs: 'center', sm: 'flex-start' }}
							justifyContent={{ xs: 'center', sm: 'flex-start' }}
							spacing={{ xs: 2, sm: 4 }}
							marginBottom={4}
						>
							<PhoneNumber />
							<ProfilePicture />
						</Stack>
						<Stack spacing={2}>
							<Typography
								variant="h6"
								component="div"
								sx={{
									flexGrow: 1,
									[theme.breakpoints.down('sm')]: {
										fontSize: '1rem',
										flexWrap: 'wrap',
									},
								}}
							>
								Informações do Funcionário
							</Typography>
							<PositionForm />
							<DatePickForm
								label='Data de Admissão'
								helperText='DD-MM-AAAA'
								value={admissionDate}
								onChange={handleAdmissionDateChange}
							/>
							<TextField
								label="Setor"
								defaultValue=""
								fullWidth
								required
								variant='filled'
							/>
							<SalaryInput value={salary} onChange={handleSalaryChange} />
						</Stack>
						<Stack marginTop={2}>
							<Button
								color='primary'
								fullWidth
								size='large'
								variant='contained'
								aria-label='cadastrar funcionário'
								endIcon={<SendIcon />}
							>
								Cadastrar Funcionário
							</Button>
						</Stack>
					</form>
				</Paper>
			</Grid>
		</Grid>
	);
}