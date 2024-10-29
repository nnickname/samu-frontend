import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <AppBar sx={{ backgroundColor: '#fff' }} position="static">
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
        {/* Logo - puedes reemplazar el texto con una imagen */}
        <Link to="/" >
          <img 
            src="https://unicorn-cdn.b-cdn.net/40e1fccc-0c75-4fba-9ab9-e36cafe41410/logo-de-samu.ai-.png"
            alt="Logo"
            style={{ height: '40px' }}
          />
        </Link>

        {/* Botón Crear Meeting */}
        <Button 
          color="primary" 
          component={Link} 
          to="/crear-meeting"
        >
          Crear Meeting
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
