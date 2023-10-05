import { Button, Grid, Typography } from '@mui/material';
import Link from 'next/link';

export default function Main() {
	return (
		<>
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
						<Link href={'/cadastro'} style={{ textDecoration: 'none' }}>
							<Typography color={'ButtonFace'}>
								Novo Cadastro
							</Typography>
						</Link>
					</Button>
					<Button
						color='primary'
						fullWidth
						size='large'
						variant='outlined'
						aria-label='ver cadastros'
						sx={{ mt: 2 }}
					>
						<Link href={'/funcionarios'} style={{ textDecoration: 'none' }}>
							<Typography color={'primary'}>
								Ver Cadastros
							</Typography>
						</Link>
					</Button>
				</Grid>
			</Grid >
		</>
	);
}