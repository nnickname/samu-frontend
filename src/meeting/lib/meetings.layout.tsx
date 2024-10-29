import Navbar from '../../shared/components/navbar'
import { ReactNode } from 'react'

interface MeetingsLayoutProps {
  children: ReactNode
}

export default function MeetingsLayout() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main className="container mx-auto px-4 py-8">
        
      </main>
    </div>
  )
}
