import { renderHook } from '@testing-library/react';
import { useMeetingRepository } from '../hooks/meeting.repository';
import * as sharedHooks from '../../shared/hooks/useRepository';
import dotenv from 'dotenv'

// Asegúrate de que dotenv se configure antes de cualquier otra operación
dotenv.config({ path: '.env' });

// Considera usar un archivo .env.test específico para pruebas
// dotenv.config({ path: '.env.test' });

// Es mejor no modificar window._env_ directamente en las pruebas
// En su lugar, configura las variables de ambiente necesarias antes de las pruebas
beforeAll(() => {
  process.env.REACT_APP_API_URL = 'https://samu-backend-ljul.onrender.com';
});

describe('useMeetingRepository', () => {
  const mockGet = jest.fn();
  const mockPost = jest.fn();
  beforeEach(() => {    
    // Actualizar la configuración del mock
    jest.spyOn(sharedHooks, 'useRepository').mockReturnValue({
      get: mockGet,
      post: mockPost,
    });
  });
  
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should get meeting by id successfully', async () => {
    // Arrange
    const mockMeeting = { id: '67206efe98f309711b33ea31' };
    mockGet.mockResolvedValueOnce(mockMeeting);
    
    // Act
    const { result } = renderHook(() => useMeetingRepository());
    const meeting = await result.current.getMeetingById('67206efe98f309711b33ea31');
    
    // Assert
    expect(mockGet).toHaveBeenCalledWith('/api/meeting/67206efe98f309711b33ea31/chat');
    expect(meeting).toEqual(mockMeeting);
  });

  it('should create meeting successfully', async () => {
    // Arrange
    const mockNewMeeting = { id: '456', title: 'New Meeting' };
    mockPost.mockResolvedValueOnce(mockNewMeeting);
    
    // Act
    const { result } = renderHook(() => useMeetingRepository());
    const newMeeting = await result.current.createMeeting();
    
    // Assert
    expect(mockPost).toHaveBeenCalledWith('/api/meeting', {});
    expect(newMeeting).toEqual(mockNewMeeting);
  });
}); 