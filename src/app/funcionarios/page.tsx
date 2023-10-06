import UserList from '@/components/Users/UserList';
import { User } from '@/components/Users/userTypes';

const mockUsers: User[] = [
	{
		id: 1,
		name: 'João',
		lastname: 'Silva',
		gender: 'Masculino',
		address: 'Rua da Amostra, 123',
		phone: 1234567890,
		photo: 'url-da-foto.jpg',
		birthday: new Date('1990-01-15'),
		position: 'Desenvolvedor Web',
		admission: new Date('2020-03-10'),
		sector: 'TI',
		salary: 5000,
	},
	{
		id: 2,
		name: 'Maria',
		lastname: 'Santos',
		gender: 'Feminino',
		address: 'Avenida Exemplo, 456',
		phone: 9876543210,
		photo: 'url-da-foto2.jpg',
		birthday: new Date('1985-05-20'),
		position: 'Designer Gráfico',
		admission: new Date('2018-07-22'),
		sector: 'Design',
		salary: 4500,
	}
];

const showDetails = ['position', 'sector', 'gender', 'address', 'phone', 'birthday', 'admission', 'salary'];

export default function funcionarios() {
	return (
		<>
			<UserList users={mockUsers} showDetails={showDetails} />
		</>
	);
}