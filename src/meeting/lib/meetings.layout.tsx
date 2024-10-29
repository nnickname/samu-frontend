import Navbar from '../../shared/components/navbar'
import { ReactNode, useState } from 'react'
import { MeetingCard } from '../components/meetingList.card'
import { Box, Container } from '@mui/material'
import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '../../shared/store/store'
import { setMeetings } from '../hooks/meeting.slice'
import { useMeetingRepository } from '../hooks/meeting.repository'
interface MeetingsLayoutProps {
  children: ReactNode
}

export default function MeetingsLayout() {
  const { getAllMeetings } = useMeetingRepository();
  const meetings = useSelector((state: RootState) => state.meetings);
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchMeetings = async () => {
      try {
        const data = await getAllMeetings();
        dispatch(setMeetings(data));
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching meetings:', error);
        setIsLoading(true);
      }
    };
    fetchMeetings();
  }, [dispatch]);
    
  return (
    <Box sx={{ minHeight: '100vh', bgcolor: 'background.default' }}>
      <Navbar />
      <Container sx={{ py: 8 }}>
        {!isLoading && meetings?.map((meeting) => (
          <MeetingCard 
            key={meeting._id}
            _id={meeting._id}
            chatHistory={meeting.chatHistory}
            transcription={meeting.transcription}
          />
        ))}
      </Container>
    </Box>
  )
}
