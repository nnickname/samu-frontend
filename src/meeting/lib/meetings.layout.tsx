import Navbar from '../../shared/components/navbar'
import { ReactNode } from 'react'
import { MeetingCard } from '../components/meetingList.card'
import { Box, Container } from '@mui/material'

interface MeetingsLayoutProps {
  children: ReactNode
}

export default function MeetingsLayout() {
  return (
    <Box sx={{ minHeight: '100vh', bgcolor: 'background.default' }}>
      <Navbar />
      <Container sx={{ py: 8 }}>
        <MeetingCard _id="123" chatHistory={[]} transcription={{
                  speakers: [],
                  messages: []
              }} />
        <MeetingCard _id="123" chatHistory={[]} transcription={{
                  speakers: [],
                  messages: []
              }} />
      </Container>
    </Box>
  )
}
