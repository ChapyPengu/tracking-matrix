'use client'

import { SessionProvider as Session } from 'next-auth/react'

function SessionProvider({ children }: { children: React.ReactNode }) {
  return (
    <Session>
      {children}
    </Session>
  )
}

export default SessionProvider