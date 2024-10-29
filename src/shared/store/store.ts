import { configureStore } from '@reduxjs/toolkit';
import meetingsReducer from '../../meeting/hooks/meeting.slice';

// Crear store
export const store = configureStore({
  reducer: {
    meetings: meetingsReducer
  }
});

// Exportar tipos
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
