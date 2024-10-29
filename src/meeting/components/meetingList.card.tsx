import { Box, Typography, Button } from "@mui/material";
import { IMeeting } from "../types/meeting";



export function MeetingCard({ _id, chatHistory}: IMeeting) {
  return (
    <Box sx={{ bgcolor: 'background.paper', borderRadius: 1, boxShadow: 1, p: 2, mb: 2, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <Box>
        <Typography variant="body1" sx={{ color: 'text.secondary', mb: 1 }}>
          <Box component="span" sx={{ fontWeight: 'bold' }}>Mensajes:</Box> {chatHistory.length}
        </Typography>
        <Typography variant="body1" sx={{ color: 'text.secondary' }}>
          <Box component="span" sx={{ fontWeight: 'bold' }}>_ID:</Box> {_id}
        </Typography>
      </Box>
      <Button variant="text" color="primary">
        Ver conversación
      </Button>
    </Box>
  )
} 