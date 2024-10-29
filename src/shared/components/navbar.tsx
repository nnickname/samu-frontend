import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import { useMeetingRepository } from '../../meeting/hooks/meeting.repository';

const Navbar = () => {
  const navigate = useNavigate();
  const { createMeeting } = useMeetingRepository();
  const handleCreateMeeting = async () => {
    try {
      const meeting = await createMeeting();
      console.log(meeting);
      //navigate(`/meeting/${meetingId}`);
    } catch (error) {
      console.error('Error creating meeting:', error);
    }
  };

  return (
    <AppBar sx={{ backgroundColor: '#fff' }} position="static">
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
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
          onClick={handleCreateMeeting}
        >
          Crear Meeting
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
