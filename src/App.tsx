import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './shared/store/store';
import { ThemeProvider, createTheme } from '@mui/material';
import MeetingsLayout from './meeting/lib/meetings.layout';


const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#3B1E54',
    },
    secondary: {
      main: '#9B7EBD',
    },
    background: {
      default: '#f5f5f5',
      paper: '#D4BEE4',
    },
  },
  typography: {
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
    ].join(','),
    h1: {
      fontSize: '2.5rem',
      fontWeight: 500,
    },
    h2: {
      fontSize: '2rem',
      fontWeight: 500,
    },
    h3: {
      fontSize: '1.75rem',
      fontWeight: 500,
    },
    body1: {
      fontSize: '1rem',
    },
  },
  shape: {
    borderRadius: 4,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
        },
      },
    },
  },
});

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <div className="min-h-screen bg-gray-100">
          <Routes>
            <Route path="/" element={<MeetingsLayout/>} />
            {/* Aquí puedes agregar más rutas según necesites */}
          </Routes>
        </div>
      </ThemeProvider>
    </Provider>
  );
};

export default App; 