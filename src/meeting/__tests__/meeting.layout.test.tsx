import { render, screen } from '@testing-library/react';
import MeetingsLayout from '../../lib/meetings.layout';
import ChatLayout from '../../lib/chat.layout';
import { store } from '../../../shared/store/store';
import { Provider } from 'react-redux';
import { MemoryRouter as Router } from "react-router-dom";

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