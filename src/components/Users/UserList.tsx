import React from 'react';
import { Box, List, Typography } from '@mui/material';
import UserDetail from './UserDetail';
import { User } from './userTypes';

interface UserListProps {
	users: User[];
	showDetails: string[];
}

const UserList: React.FC<UserListProps> = ({ users, showDetails }: UserListProps) => {
	return (
		<Box p={3}>
			<Typography variant='h4' gutterBottom>
				Usuários Cadastrados
			</Typography>
			<List>
				{users.map((user) => (
					<UserDetail key={user.id} user={user} showDetails={showDetails} />
				))}
			</List>
		</Box>
	);
};

export default UserList;