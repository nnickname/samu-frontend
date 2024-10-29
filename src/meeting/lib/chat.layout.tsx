import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Box, TextField, Button, Paper, Typography } from '@mui/material';
import Navbar from '../../shared/components/navbar';
import ChatMessage from '../components/ChatMessage';
import { IChatMessage, IMeeting } from '../types/meeting';
import { RootState } from '../../shared/store/store';
import { useDispatch, useSelector } from 'react-redux';
import { useMeetingRepository } from '../hooks/meeting.repository';
import { setMeetings } from '../hooks/meeting.slice';

const ChatLayout: React.FC = () => {
  const { getMeetingById, sendQuestion } = useMeetingRepository();
  const { meetingId } = useParams<{ meetingId: string }>();
  const meetings = useSelector((state: RootState) => state.meetings);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<IChatMessage[]>([]);
  const dispatch = useDispatch();
  useEffect(() => {
    
    const fetchMeeting = async () => {
      if (meetingId) {
        if(meetings.length === 0){
          const meeting = await getMeetingById(meetingId);
          setMessages(meeting?.chatHistory || []);
          return;
        }
        const meeting = meetings.find(m => m._id === meetingId);
        setMessages(meeting?.chatHistory || []);
      }
    };
    fetchMeeting();
  }, [meetingId, meetings]);

  const handleSend = async () => {
    if (!input.trim()) return;

    const newMessages = [
      ...messages,
      { question: input, answer: '', timestamp: new Date() }
    ];
    setMessages(newMessages);
    setInput('');

    try {
      const updatedMeeting = await sendQuestion(meetingId ?? '', input);
      setMessages([...messages, updatedMeeting]);
    } catch (error) {
      console.error('Error al enviar mensaje:', error);
    }
  };

  return (
    <>
      <Box>
        <Navbar />
      </Box>
      <Box sx={{ maxWidth: 800, margin: 'auto', p: 2 }}>
        <Paper 
          elevation={2} 
          sx={{ 
            height: '70vh', 
            mb: 2, 
            p: 2, 
            overflow: 'auto'
          }}
        >
          {messages!.map((message, index) => (
            <ChatMessage
              key={index}
              message={message}
            />
          ))}
        </Paper>
        
        <Box sx={{ display: 'flex', gap: 1 }}>
          <TextField
            fullWidth
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSend()}
            placeholder="Escribe tu mensaje..."
          />
          <Button variant="contained" onClick={handleSend}>
            Enviar
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default ChatLayout; 