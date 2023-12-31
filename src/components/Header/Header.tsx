'use client';

import { AppBar, Box, IconButton, Toolbar } from '@mui/material';
import logoTaugor from '../../assets/marca-taugor.png';
import Image from 'next/image';
import HomeIcon from '@mui/icons-material/Home';
import { useTheme } from '@mui/material/styles';


export default function Header() {
	const theme = useTheme();

	return (
		<Box marginBottom={3} sx={{ flexGrow: 1 }}>
			<AppBar color="inherit" position="static">
				<Toolbar sx={{ justifyContent: 'space-between' }}>
					<Image
						src={logoTaugor}
						alt="Logo Taugor"
						sizes="100%"
						style={{
							width: 'auto',
							height: 'auto',
						}}
					/>
					<IconButton
						size="large"
						edge="start"
						color="inherit"
						aria-label="menu"
						sx={{
							[theme.breakpoints.down('sm')]: {
								margin: 0,
							},
							[theme.breakpoints.up('md')]: {
								margin: 2,
							},
						}}
					>
						<HomeIcon
							color="primary"
						/>
					</IconButton>
				</Toolbar>
			</AppBar>
		</Box>
	);
}
