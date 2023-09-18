import { AppBar, Box, Button, IconButton, Toolbar, Typography } from "@mui/material";
import logoTaugor from '../../assets/marca-taugor.png';
import Image from "next/image";

export default function Header() {
  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar color="inherit">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <Image
                src={logoTaugor}
                alt="Logo Taugor"
              />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Informação de contato
            </Typography>
            <Button color="inherit">Home</Button>
          </Toolbar>
        </AppBar>
      </Box>
    </div>
  );
};
