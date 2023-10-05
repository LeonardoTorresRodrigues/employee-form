import { Button, Grid } from '@mui/material';

export default function Main() {
	return (
		<Grid
			container
			alignItems={'center'}
			justifyContent={'center'}
			style={{ height: '100vh' }}
		>
			<Grid
				item
				xs={10}
				sm={6}
				md={4}
			>
				<Button
					color='primary'
					fullWidth
					size='large'
					variant='contained'
					aria-label='novo cadastro'
					sx={{ mt: 2 }}
				>
					Novo cadastro
				</Button>
				<Button
					color='primary'
					fullWidth
					size='large'
					variant='outlined'
					aria-label='ver cadastros'
					sx={{ mt: 2 }}
				>
					Ver cadastros
				</Button>
			</Grid>
		</Grid >
	);
}