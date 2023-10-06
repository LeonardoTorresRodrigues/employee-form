import React from 'react';
import { Typography, ListItem, ListItemAvatar, Avatar, ListItemText } from '@mui/material';
import { User } from '../Users/userTypes';

interface UserDetailProps {
	user: User;
	showDetails: string[];
}

const UserDetail: React.FC<UserDetailProps> = ({ user, showDetails }: UserDetailProps) => {
	return (
		<ListItem alignItems="flex-start">
			<ListItemAvatar>
				<Avatar alt={`${user.name} ${user.lastname}`} src={user.photo} />
			</ListItemAvatar>
			<ListItemText
				primary={`${user.name} ${user.lastname}`}
				secondary={
					<React.Fragment>
						{showDetails.includes('position') && (
							<Typography component="span" variant="body2" color="textPrimary">
								Cargo: {user.position}
							</Typography>
						)}
						{showDetails.includes('sector') && (
							<>
								<br />
								<Typography component="span" variant="body2" color="textSecondary">
									Setor: {user.sector}
								</Typography>
							</>
						)}
						{showDetails.includes('gender') && (
							<>
								<br />
								<Typography component="span" variant="body2" color="textSecondary">
									Gênero: {user.gender}
								</Typography>
							</>
						)}
						{showDetails.includes('address') && (
							<>
								<br />
								<Typography component="span" variant="body2" color="textSecondary">
									Endereço: {user.address}
								</Typography>
							</>
						)}
						{showDetails.includes('salary') && (
							<>
								<br />
								<Typography component="span" variant="body2" color="textSecondary">
									Salário: {user.salary}
								</Typography>
							</>
						)}
					</React.Fragment>
				}
			/>
		</ListItem>
	);
};

export default UserDetail;
