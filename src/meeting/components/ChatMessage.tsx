import React from 'react';
import { Box, Paper, Typography } from '@mui/material';
import CircularProgress from '@mui/material/CircularProgress';
import { IChatMessage } from '../types/meeting';

interface ChatMessageProps {
  message: IChatMessage;
}

const ChatMessage: React.FC<ChatMessageProps> = ({message }) => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
      <Box 
        sx={{ 
          display: 'flex', 
          justifyContent: 'flex-end',
          mb: 1 
        }}
      >
        <Paper 
          sx={{ 
            p: 2, 
            maxWidth: '70%', 
            bgcolor: '#e3f2fd',
            borderRadius: '20px 20px 0 20px'
          }}
        >
          <Typography>{message.question}</Typography>
        </Paper>
      </Box>

      <Box
        sx={{
          display: 'flex',
          justifyContent: 'flex-start', 
          mb: 1
        }}
      >
        <Paper
          sx={{
            p: 2,
            maxWidth: '70%',
            bgcolor: '#f5f5f5', 
            borderRadius: '20px 20px 20px 0'
          }}
        >
          {message.answer ? (
            <Typography>{message.answer}</Typography>
          ) : (
            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
              <CircularProgress size={24} />
            </Box>
          )}
        </Paper>
      </Box>
    </Box>
  );
};

export default ChatMessage; 