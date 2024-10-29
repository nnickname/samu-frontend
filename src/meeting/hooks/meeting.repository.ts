import { useRepository } from '../../shared/hooks/useRepository';
import { IMeeting } from '../types/meeting';

export const useMeetingRepository = () => {
  const { get, post } = useRepository();

  
  const getMeetingById = async (meetingId: string): Promise<IMeeting> => {
    const data = await get(`/api/meeting/${meetingId}/chat`);
    return data as IMeeting;
  };

  const getAllMeetings = async (): Promise<IMeeting[]> => {
    const data = await get('/api/meeting/chats');
    return data as IMeeting[];
  };

  const createMeeting = async (): Promise<IMeeting> => {
    const data = await post('/api/meeting', {});
    return data as IMeeting;
  };

  const sendQuestion = async (meetingId: string, question: string): Promise<IMeeting> => {
    const data = await post(`/api/meeting/${meetingId}/chat`, { question });
    return data as IMeeting;
  };

  return {
    getMeetingById,
    getAllMeetings,
    createMeeting,
    sendQuestion,
  };
};
