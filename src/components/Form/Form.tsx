'use client';

import { useState } from 'react';
import { TextField, Stack, Grid, Paper, Button, Typography } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import { useTheme } from '@mui/material/styles';
import ProfilePicture from './ProfilePicture';
import SalaryInput from './SalaryInput';
import GenderForm from './GenderForm';
import DatePickForm from './DatePickerForm';
import { MuiTelInput } from 'mui-tel-input';

interface IRegistration {
	name: string,
	lastname: string,
	gender: string,
	otherGender?: string,
	birthday: Date,
	admissionDate: Date,
	address: string,
	salary: number,
	phone: string,
	position: string,
	sector: string,
}

export default function Form() {
	const theme = useTheme();

	const [name, setName] = useState<string>(''); // name value
	const [lastname, setLastname] = useState<string>(''); // lastname value
	const [gender, setGender] = useState<string>(''); // gender value
	const [otherGenderValue, setOtherGenderValue] = useState<string>(''); // other gender value
	const [birthday, setBirthday] = useState<Date>(); // birthday value
	const [admissionDate, setAdmissionDate] = useState<Date>(); // adimission date value
	const [address, setAddress] = useState<string>(''); // address value
	const [salary, setSalary] = useState<number>(0); // salary value
	const [phone, setPhone] = useState<string>(''); // phone number value
	const [photo, setPhoto] = useState<File | null>(null); // photo value
	const [position, setPosition] = useState<string>(''); // position value
	const [sector, setSector] = useState<string>(''); // sector value
	const [error, setError] = useState(''); // error for validation

	// Name
	const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const inputValue = event.target.value;

		if (/^[a-zA-Z]*$/.test(inputValue) && inputValue.length <= 50) {
			setName(inputValue);
		}
	};

	// Last Name
	const handleLastNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const inputValue = event.target.value;

		if (/^[a-zA-Z]*$/.test(inputValue) && inputValue.length <= 50) {
			setLastname(inputValue);
		}
	};

	// Other Gender
	const handleOtherGenderChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const otherGenderValue = event.target.value;

		if (/^[a-zA-ZÀ-ÿ\s]*$/.test(otherGenderValue) && otherGenderValue.length <= 25) {
			setOtherGenderValue(otherGenderValue);
		}
	};

	// Birthday
	const handleBirthdayChange = (date: Date) => {
		setBirthday(date);
	};

	// Admission Date
	const handleAdmissionDateChange = (date: Date) => {
		setAdmissionDate(date);
	};

	// Sector
	const handleSectorChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const inputValue = event.target.value;
		setSector(inputValue);

		if (inputValue.trim() === '') {
			setError('O campo é obrigatório.');
		} else {
			setError('');
		}
	};

	// Position
	const handlePositionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const inputValue = event.target.value;
		setPosition(inputValue);

		if (inputValue.trim() === '') {
			setError('O campo é obrigatório.');
		} else {
			setError('');
		}
	};

	// Salary
	const handleSalaryChange = (newSalary: number) => {
		setSalary(newSalary);
	};

	// Address
	const handleAddressChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const newAddress = event.target.value;
		setAddress(newAddress);
	};

	// Phone

	const maxNonEmptyDigits = 14;

	const handlePhoneChange = (newPhone: string) => {
		const phoneNumberWithoutSpaces = newPhone.replace(/\s/g, '');

		if (phoneNumberWithoutSpaces.length <= maxNonEmptyDigits) {
			setPhone(newPhone);
		}
	};

	const handleEmployeeResgistration = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		const user: IRegistration = {
			name,
			lastname,
			gender,
			otherGenderValue,
			birthday,
			admissionDate,
			address,
			phone,
			position,
			sector,
			salary
		};
	};

	const handleFormSubmit = () => {
		console.log('Nome:', name);
		console.log('SobreNome:', lastname);
		console.log('Gênero:', gender);
		console.log('Outro Gênero:', otherGenderValue);
		console.log('Aniversario:', birthday);
		console.log('Contratação:', admissionDate);
		console.log('Endereço:', address);
		console.log('Telefone:', phone);
		console.log('Cargo:', position);
		console.log('Setor:', sector);
		console.log('Salário:', salary);
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
							value={lastname}
							onChange={handleLastNameChange}
							fullWidth
							variant='filled'
						/>
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
							label='Endereço'
							helperText='ex. Avenida Paulista, 1.234 - São Paulo - SP - 07010 001'
							value={address}
							onChange={handleAddressChange}
							error={Boolean(error)}
							fullWidth
							variant='filled'
						/>
						{/* <AddressFieldForm
							validateAddress={validateAddress}
						/> */}
						<Stack
							direction={{ xs: 'column', sm: 'row' }}
							alignItems={{ xs: 'center', sm: 'flex-start' }}
							justifyContent={{ xs: 'center', sm: 'flex-start' }}
							spacing={{ xs: 2, sm: 4 }}
							marginBottom={4}
						>

							<MuiTelInput
								defaultCountry='BR'
								value={phone}
								onChange={handlePhoneChange}
								required
								label="Telefone"
								helperText="(xx) xxxxx-xxxx"
								fullWidth
								variant='filled'
							/>
							{/* <PhoneNumber /> */}
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
							{/* <InputWithValidationForm
								label='Cargo'
								value={position}
							/> */}
							<DatePickForm
								label='Data de Admissão'
								helperText='DD-MM-AAAA'
								value={admissionDate}
								onChange={handleAdmissionDateChange}
							/>

							<TextField
								required
								label='Setor'
								value={sector}
								onChange={handleSectorChange}
								error={Boolean(error)}
								helperText={error}
								fullWidth
								variant='filled'
							/>
							{/* <InputWithValidationForm
								label='Setor'
								value={sector}
							/> */}
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
								onClick={handleFormSubmit}
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