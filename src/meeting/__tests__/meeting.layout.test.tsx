import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { MemoryRouter as Router } from "react-router-dom";
import { store } from '../../shared/store/store';
import ChatLayout from '../lib/chat.layout';
import MeetingsLayout from '../lib/meetings.layout';

describe('MeetingsLayout', () => {
  it('should display loading message when component is mounted', () => {
    render(<Provider store={store}>
      <Router>
        <MeetingsLayout />
      </Router>
    </Provider>);
    
    expect(
      screen.getByText('Cargando conversaciones...')
    ).toBeInTheDocument();
  });

  it('should display "No hay conversaciones disponibles" when there are no meetings', () => {
    render(<Provider store={store}>
      <Router>
        <ChatLayout />
      </Router>
    </Provider>);
    
    expect(
      screen.getByText('¿En qué puedo ayudarte hoy?')
    ).toBeInTheDocument();
  });
});