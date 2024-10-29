import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IMeeting } from '../types/meeting';

// Estado inicial
const initialState: IMeeting[] = [];

// Slice para meeting
export const meetingSlice = createSlice({
  name: 'meetings',
  initialState,
  reducers: {
    setMeetings: (state, action: PayloadAction<IMeeting[]>) => {
      return action.payload;
    },
  }
});

// Exportar acciones
export const { setMeetings } = meetingSlice.actions;

// Exportar reducer
export default meetingSlice.reducer; 